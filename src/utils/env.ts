/**
 * Secure Environment Variables Module
 *
 * This module provides type-safe and secure access to environment variables.
 * All variables are optional with sensible defaults to prevent runtime errors.
 */

import { z } from 'zod';

// Define environment variable schemas for validation
const envSchema = z.object({
  // Public variables (all optional with defaults)
  NEXT_PUBLIC_EMAIL: z.string().email().optional().default(''),
  NEXT_PUBLIC_ADDRESS: z.string().min(1).optional().default(''),
  NEXT_PUBLIC_PHONE: z.string().min(1).optional().default(''),
  NEXT_PUBLIC_GOOGLE_MAPS_LINK: z.string().url().optional().default(''),
  NEXT_PUBLIC_LINKEDIN_PROFILE: z.string().url().optional().default(''),
  NEXT_PUBLIC_GITHUB_PROFILE: z.string().url().optional().default(''),
  NEXT_PUBLIC_GITHUB_REPOSITORY: z.string().url().optional().default(''),
  NEXT_PUBLIC_CV_PDF_LINK: z.string().url().optional().default(''),

  // Optional variables with defaults
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DEBUG_MODE: z
    .string()
    .transform((val) => val === 'true')
    .default('false'),
});

// Type for validated environment variables
type Env = z.infer<typeof envSchema>;

/**
 * Validates and sanitizes environment variables
 * @throws Error if validation fails
 */
function validateEnv(): Env {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      // During testing, we want to be more lenient
      if (process.env.NODE_ENV === 'test') {
        return {
          NEXT_PUBLIC_EMAIL: '',
          NEXT_PUBLIC_ADDRESS: '',
          NEXT_PUBLIC_PHONE: '',
          NEXT_PUBLIC_GOOGLE_MAPS_LINK: '',
          NEXT_PUBLIC_LINKEDIN_PROFILE: '',
          NEXT_PUBLIC_GITHUB_PROFILE: '',
          NEXT_PUBLIC_GITHUB_REPOSITORY: '',
          NEXT_PUBLIC_CV_PDF_LINK: '',
          NODE_ENV: 'test',
          DEBUG_MODE: false,
        };
      }

      const invalidVars = error.errors
        .filter((err) => err.code === 'invalid_type')
        .map((err) => err.path[0])
        .join(', ');

      throw new Error(
        `Invalid environment variables: ${invalidVars}\n` +
          'Please check your .env file and ensure all variables are set correctly.',
      );
    }
    throw error;
  }
}

// Validate environment variables on module load
const validatedEnv = validateEnv();

/**
 * Secure environment configuration object
 * Provides type-safe access to validated environment variables
 * All variables are optional with sensible defaults
 */
export const env = {
  // Public variables (all optional)
  email: validatedEnv.NEXT_PUBLIC_EMAIL,
  address: validatedEnv.NEXT_PUBLIC_ADDRESS,
  phone: validatedEnv.NEXT_PUBLIC_PHONE,
  googleMapsLink: validatedEnv.NEXT_PUBLIC_GOOGLE_MAPS_LINK,
  linkedinProfile: validatedEnv.NEXT_PUBLIC_LINKEDIN_PROFILE,
  githubProfile: validatedEnv.NEXT_PUBLIC_GITHUB_PROFILE,
  githubRepository: validatedEnv.NEXT_PUBLIC_GITHUB_REPOSITORY,
  cvPdfLink: validatedEnv.NEXT_PUBLIC_CV_PDF_LINK,

  // Optional variables
  isProduction: validatedEnv.NODE_ENV === 'production',
  debugMode: validatedEnv.DEBUG_MODE,
} as const;

// Type exports for use in other modules
export type EnvConfig = typeof env;
