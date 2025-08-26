import { NextRequest, NextResponse } from 'next/server';

/**
 * Middleware for handling security headers and CSP
 *
 * This middleware:
 * 1. Generates a unique nonce for CSP
 * 2. Sets security headers including CSP
 * 3. Handles errors gracefully
 * 4. Uses unsafe-inline for styles in development mode
 *
 * Note: The 'unsafe-inline' directive for styles in development mode is required
 * for Next.js development indicators to function properly on localhost. If you
 * prefer to disable development indicators instead, you can set:
 *
 * ```js
 * // next.config.js
 * module.exports = {
 *   devIndicators: false
 * }
 * ```
 *
 * @param {NextRequest} request - The incoming request
 * @returns {NextResponse} The response with security headers
 * @throws {Error} If there's an error generating the nonce or setting headers
 */
export function middleware(request: NextRequest) {
  try {
    // Generate a unique nonce for CSP
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

    // Get the environment
    const isDevelopment = process.env.NODE_ENV === 'development';

    // Define CSP header with nonce
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'nonce-${nonce}'${isDevelopment ? " 'unsafe-eval'" : ''};
      style-src 'self' 'unsafe-inline' https://us.i.posthog.com;
      img-src 'self' blob: data:;
      font-src 'self';
      connect-src 'self' https://us.i.posthog.com https://internal-j.posthog.com;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      upgrade-insecure-requests;
    `;

    // Clean up CSP header by removing extra whitespace
    const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

    // Create new headers object
    const requestHeaders = new Headers(request.headers);

    try {
      // Set nonce in headers for use in components
      requestHeaders.set('x-nonce', nonce);

      // Set CSP header
      requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);
    } catch (error) {
      console.error('Error setting headers:', error);
      // Continue with the request even if header setting fails
    }

    // Create response with updated headers
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    try {
      // Set CSP header in response
      response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);
    } catch (error) {
      console.error('Error setting response headers:', error);
      // Continue with the response even if header setting fails
    }

    return response;
  } catch (error) {
    console.error('Middleware error:', error);
    // Return a basic response if something goes wrong
    return NextResponse.next();
  }
}

/**
 * Configuration for middleware matcher
 *
 * Excludes static assets and API routes from middleware processing
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
