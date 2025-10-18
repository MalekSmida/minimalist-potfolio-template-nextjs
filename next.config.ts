import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://us.i.posthog.com https://internal-j.posthog.com;
    connect-src 'self' https: https://us.i.posthog.com https://internal-j.posthog.com${
      isDev ? ' http:' : ''
    };
    style-src 'self' 'unsafe-inline' https://us.i.posthog.com;
    img-src 'self' blob: data: https:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-src 'self';
    frame-ancestors 'none';
    worker-src 'self' blob:;
    upgrade-insecure-requests;
`;

/**
 * Security Headers Configuration
 *
 * This array defines all security-related HTTP headers that will be applied to
 * every response sent from the Next.js application. These headers enhance the
 * security posture of the application by protecting against common web vulnerabilities.
 *
 * Headers include:
 * - Performance optimizations
 * - Transport security
 * - Protection against XSS, clickjacking, MIME sniffing, etc.
 * - Content Security Policy (CSP)
 * - Cross-Origin policies
 * - Permissions policies for browser features
 */
const securityHeaders = [
  // Content Security Policy (CSP) - Critical XSS Protection
  // Defines trusted sources for scripts, styles, images, frames, and other resources
  // Customized for specific needs:
  // - PostHog analytics (us.i.posthog.com, internal-j.posthog.com)
  // - Development: Allows HTTP connections for localhost
  // - PostHog requires 'unsafe-eval' for event processing
  // - Web workers for PostHog analytics ('self' blob:)
  {
    key: 'Content-Security-Policy',
    value: cspHeader.replace(/\n/g, ''),
  },

  // HTTP Strict Transport Security (HSTS) - Force HTTPS
  // Ensures all connections use HTTPS for 1 year
  // includeSubDomains covers any future subdomains
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },

  // Frontend Domain Security Headers
  // These headers protect the main user-facing domain where users interact with app

  // X-Frame-Options: Prevent Clickjacking on Frontend
  // Blocks embedding app in malicious iframes from other domains
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },

  // X-Content-Type-Options: Prevent MIME Type Sniffing on Frontend
  // Protects uploaded files and user content on app from being executed as scripts
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },

  // Referrer-Policy: Control Information Leakage from Frontend
  // Prevents leaking sensitive data to external sites
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },

  // Permissions-Policy: Disable Unnecessary Browser Features on Frontend
  // Blocks access to camera, microphone, and location APIs on app
  // Doesn't need these permissions on the main domain
  // Prevents malicious scripts from accessing user devices
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

/**
 * Next.js Configuration
 *
 * This configuration object controls the behavior of the Next.js application.
 *
 * Key features:
 * - Security headers applied to all routes
 * - CSP header with strict content source policies
 * - Support for TypeScript configuration
 * - Compression and performance optimization
 *
 * For more information on Next.js configuration options, see:
 * https://nextjs.org/docs/app/api-reference/next-config-js
 */
const nextConfig: NextConfig = {
  /**
   * Headers Configuration
   *
   * Adds security headers to all routes in the application.
   * This function is called for each request to generate response headers.
   *
   * @returns {Promise<Array>} Array of header configurations for different routes
   */
  async headers() {
    return [
      {
        source: '/(.*)',
        // Apply these headers to all routes in your application.
        headers: securityHeaders,
      },
    ];
  },

  /**
   * Performance Optimization
   *
   * Configure webpack, compiler options, and other performance settings.
   */
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  /**
   * Compression Configuration
   *
   * Enable Gzip compression for responses.
   */
  compress: true,

  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,

  /**
   * Configure redirects from old URLs to new ones
   */
  async redirects() {
    return [
      // Add redirects as needed
    ];
  },

  /**
   * Configure rewrites for proxying or URL normalization
   */
  async rewrites() {
    return [
      // Add rewrites as needed
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/ingest/flags',
        destination: 'https://us.i.posthog.com/flags',
      },
    ];
  },
};

export default nextConfig;
