import posthog from 'posthog-js';

// Initialize PostHog with optimized configuration
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: '/ingest',
  ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
  defaults: '2025-05-24',

  capture_exceptions: true,
  capture_pageview: true,
  capture_pageleave: true,
  debug: process.env.NODE_ENV === 'development',

  // Privacy and performance settings
  person_profiles: 'identified_only',
  respect_dnt: true,

  // Session recording settings (optional)
  // session_recording: {
  //   maskAllInputs: true,
  //   maskTextSelector: '*',
  // },
});
