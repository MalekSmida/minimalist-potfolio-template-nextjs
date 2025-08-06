/**
 * Page Sections Index
 *
 * This file exports all page section components from the sections directory.
 * These are larger components that make up full sections of pages.
 * Import sections from this file using the pattern:
 *
 * ```
 * import { SectionName } from '@/sections';
 * ```
 *
 * Sections are organized by purpose:
 * - Presentation: Hero/landing section with main introduction
 * - About: Personal information, skills, and background
 * - Career: Professional experience and timeline
 * - Skills: Technical and professional competencies
 *
 * Each section is designed to be:
 * - Independently configurable via data files
 * - Responsive across all device sizes
 * - Accessible with proper semantic markup
 * - Dark mode compatible
 */

export { default as Presentation } from './Presentation';
export { default as About } from './About';
export { default as Skills } from './Skills';
