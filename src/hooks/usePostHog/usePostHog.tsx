import posthog from 'posthog-js';

/**
 * Custom hook for PostHog analytics tracking
 *
 * Provides type-safe event tracking utilities for consistent
 * analytics implementation across the portfolio application.
 */
export const useAnalytics = () => {
  const trackEvent = (
    eventName: string,
    properties?: Record<string, string | number | boolean>,
  ) => {
    if (posthog) {
      posthog.capture(eventName, properties);
    }
  };

  // Contact page events
  const trackContactMethod = (method: string, destination?: string) => {
    trackEvent('contact_method_clicked', {
      method,
      destination: destination || 'unknown',
      page: 'contact',
    });
  };

  const trackCVDownload = () => {
    trackEvent('cv_downloaded', {
      page: 'contact',
    });
  };

  // Career page events
  const trackExperienceExpanded = (companyName: string, position: string) => {
    trackEvent('experience_card_expanded', {
      company: companyName,
      position,
      page: 'career',
    });
  };

  const trackExperienceCollapsed = (companyName: string, position: string) => {
    trackEvent('experience_card_collapsed', {
      company: companyName,
      position,
      page: 'career',
    });
  };

  const trackCompanyLogoClick = (companyName: string) => {
    trackEvent('company_logo_clicked', {
      company: companyName,
      page: 'career',
    });
  };

  // Consulting page events
  const trackServiceCardInteraction = (serviceName: string, action: string) => {
    trackEvent('consulting_service_interaction', {
      service: serviceName,
      action,
      page: 'consulting',
    });
  };

  // About page events
  const trackSkillCategoryInteraction = (categoryName: string) => {
    trackEvent('skill_category_interaction', {
      category: categoryName,
      page: 'about',
    });
  };

  // Dark mode events
  const trackDarkModeToggle = (isEnabled: boolean) => {
    trackEvent('dark_mode_toggled', {
      enabled: isEnabled,
      timestamp: new Date().toISOString(),
    });
  };

  // General navigation events
  const trackNavigationClick = (destination: string, source: string = 'navigation') => {
    trackEvent('navigation_clicked', {
      destination,
      source,
    });
  };

  return {
    trackEvent,
    trackContactMethod,
    trackCVDownload,
    trackExperienceExpanded,
    trackExperienceCollapsed,
    trackCompanyLogoClick,
    trackServiceCardInteraction,
    trackSkillCategoryInteraction,
    trackDarkModeToggle,
    trackNavigationClick,
  };
};
