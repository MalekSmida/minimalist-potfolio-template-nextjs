import posthog from 'posthog-js';

const isProduction = process.env.NODE_ENV === 'production';
// Only inject valid PostHog key in production
const posthogKey =
  isProduction && process.env.NEXT_PUBLIC_POSTHOG_KEY
    ? process.env.NEXT_PUBLIC_POSTHOG_KEY
    : 'fake_key_to_disable_posthog'; // docs: https://posthog.com/tutorials/multiple-environments#opt-out-of-capturing-on-initialization

// Initialize PostHog with optimized configuration
posthog.init(posthogKey, {
  api_host: '/ingest',
  ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
  defaults: '2025-05-24',

  capture_exceptions: true,
  capture_pageview: true,
  capture_pageleave: true,
  // debug: process.env.NODE_ENV === 'development', // No need as we activate PostHog only on production

  // Privacy and performance settings
  person_profiles: 'identified_only',
  respect_dnt: true,

  // Session recording settings (optional)
  // session_recording: {
  //   maskAllInputs: true,
  //   maskTextSelector: '*',
  // },

  /**
   * Disable capturing events when not poduction
   * Docs: https://posthog.com/tutorials/multiple-environments#opt-out-of-capturing-on-initialization
   */
  loaded: function (ph) {
    if (!isProduction) {
      ph.opt_out_capturing(); // opts a user out of event capture
      ph.set_config({ disable_session_recording: true });
    }
  },
});
