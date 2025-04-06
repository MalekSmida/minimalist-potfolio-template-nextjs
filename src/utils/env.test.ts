import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { env } from './env';

describe('Environment Variables', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env.NODE_ENV = 'test';
  });

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  describe('Public Variables', () => {
    it('should handle missing email', () => {
      expect(env.email).toBe('');
    });

    it('should handle missing address', () => {
      expect(env.address).toBe('');
    });

    it('should handle missing phone', () => {
      expect(env.phone).toBe('');
    });

    it('should handle missing Google Maps link', () => {
      expect(env.googleMapsLink).toBe('');
    });

    it('should handle missing LinkedIn profile', () => {
      expect(env.linkedinProfile).toBe('');
    });

    it('should handle missing GitHub profile', () => {
      expect(env.githubProfile).toBe('');
    });

    it('should handle missing GitHub repository', () => {
      expect(env.githubRepository).toBe('');
    });

    it('should handle missing CV PDF link', () => {
      expect(env.cvPdfLink).toBe('');
    });
  });

  describe('Optional Variables', () => {
    it('should set isProduction to false in test environment', () => {
      expect(env.isProduction).toBe(false);
    });

    it('should set debugMode to false by default', () => {
      expect(env.debugMode).toBe(false);
    });
  });

  describe('Validation', () => {
    it('should handle missing variables in test environment', () => {
      // In test environment, all variables should be empty strings
      expect(env.email).toBe('');
      expect(env.address).toBe('');
      expect(env.phone).toBe('');
      expect(env.googleMapsLink).toBe('');
      expect(env.linkedinProfile).toBe('');
      expect(env.githubProfile).toBe('');
      expect(env.githubRepository).toBe('');
      expect(env.cvPdfLink).toBe('');
    });

    it('should handle invalid email format', () => {
      process.env.NEXT_PUBLIC_EMAIL = 'invalid-email';
      expect(env.email).toBe('');
    });

    it('should handle invalid URL format', () => {
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_LINK = 'not-a-url';
      expect(env.googleMapsLink).toBe('');
    });
  });
});
