/**
 * Custom Hooks Index
 *
 * This file exports all custom React hooks from the hooks directory.
 * Import hooks from this file using the pattern:
 *
 * ```
 * import { useHookName } from '@/hooks';
 * ```
 *
 * Hooks are organized by functionality:
 * - Scroll-related hooks:
 *   - useMesureVerticalScroll: Measures scroll position and direction
 *   - useShowBackToTop: Controls visibility of back-to-top UI elements
 *   - useScrollToSection: Handles smooth scrolling to page sections
 *   - useShowNavHeader: Controls visibility of navigation header based on scroll
 * - Theme-related hooks:
 *   - useDarkMode: Manages dark/light theme settings
 * - Analytics-related hooks:
 *   - useAnalytics: PostHog analytics tracking utilities
 */

export { default as useMesureVerticalScroll } from './useMesureVerticalScroll';
export { default as useShowBackToTop } from './useShowBackToTop';
export { default as useScrollToSection } from './useScrollToSection';
export { default as useDarkMode } from './useDarkMode';
export { default as useShowNavHeader } from './useShowNavHeader';
export { useAnalytics } from './usePostHog';
