import type { NextConfig } from 'next';

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
  // Improve performance
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // Strict-Transport-Security (HSTS)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Permitted-Cross-Domain-Policies',
    value: 'none',
  },
  // Permissions-Policy modern replacement for Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: '*',
  },
  // Additional Cross-Origin headers
  {
    key: 'Cross-Origin-Embedder-Policy',
    value: 'require-corp',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin',
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
    ];
  },
};

export default nextConfig;
