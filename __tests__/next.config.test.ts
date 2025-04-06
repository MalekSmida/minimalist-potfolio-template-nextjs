import { describe, it, expect } from 'vitest';
import type { NextConfig } from 'next';
import nextConfig from '../next.config';

// Type assertion for the config
const config = nextConfig as NextConfig & {
  headers: () => Promise<{ headers: { key: string; value: string }[] }[]>;
};

describe('Next.js Configuration', () => {
  it('should have all required security headers', async () => {
    const headersConfig = await config.headers();
    const securityHeaders = headersConfig[0].headers;

    // Required security headers
    const requiredHeaders = [
      'X-DNS-Prefetch-Control',
      'Strict-Transport-Security',
      'X-XSS-Protection',
      'X-Frame-Options',
      'X-Content-Type-Options',
      'Referrer-Policy',
      'X-Permitted-Cross-Domain-Policies',
      'Permissions-Policy',
      'Access-Control-Allow-Origin',
      'Cross-Origin-Embedder-Policy',
      'Cross-Origin-Opener-Policy',
      'Cross-Origin-Resource-Policy',
      'Content-Security-Policy',
    ];

    // Check if all required headers are present
    requiredHeaders.forEach((header) => {
      const headerExists = securityHeaders.some((h) => h.key === header);
      console.log(`Checking ${header}:`, headerExists ? '✓' : '✗');
      expect(headerExists).toBe(true);
    });
  });

  it('should have correct CSP directives', async () => {
    const headersConfig = await config.headers();
    const securityHeaders = headersConfig[0].headers;
    const cspHeader = securityHeaders.find((h) => h.key === 'Content-Security-Policy');

    expect(cspHeader).toBeDefined();
    expect(cspHeader?.value).toBeDefined();

    // Required CSP directives
    const requiredDirectives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' blob: data:",
      "font-src 'self' data:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      'block-all-mixed-content',
      'upgrade-insecure-requests',
      "connect-src 'self'",
    ];

    // Check if all required directives are present
    requiredDirectives.forEach((directive) => {
      const directiveExists = cspHeader?.value.includes(directive);
      console.log(`Checking CSP directive ${directive}:`, directiveExists ? '✓' : '✗');
      expect(directiveExists).toBe(true);
    });
  });

  it('should have correct header values', async () => {
    const headersConfig = await config.headers();
    const securityHeaders = headersConfig[0].headers;

    // Test specific header values
    const headerValueTests = [
      {
        key: 'X-Frame-Options',
        expectedValue: 'DENY',
      },
      {
        key: 'X-Content-Type-Options',
        expectedValue: 'nosniff',
      },
      {
        key: 'Strict-Transport-Security',
        expectedValue: 'max-age=63072000; includeSubDomains; preload',
      },
      {
        key: 'Permissions-Policy',
        expectedValue: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
      },
    ];

    headerValueTests.forEach(({ key, expectedValue }) => {
      const header = securityHeaders.find((h) => h.key === key);
      console.log(`Checking ${key} value:`, header?.value === expectedValue ? '✓' : '✗');
      expect(header?.value).toBe(expectedValue);
    });
  });
});
