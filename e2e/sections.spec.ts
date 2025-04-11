import { test, expect } from '@playwright/test';

test.describe('Portfolio Sections', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have main content with sections', async ({ page }) => {
    // Main content should exist
    const main = page.locator('main');
    await expect(main).toBeVisible();

    // Check for sections
    const sections = main.locator(':scope > section, :scope > div > section');
    const sectionCount = await sections.count();

    expect(sectionCount).toBeGreaterThan(0);

    // Each section should have content
    for (let i = 0; i < Math.min(sectionCount, 3); i++) {
      const section = sections.nth(i);

      // Check for headings
      const headings = section.locator('h1, h2, h3');
      const headingCount = await headings.count();

      if (headingCount > 0) {
        await expect(headings.first()).toBeVisible();
      }

      // Check for content (paragraphs, lists, or other elements)
      const content = section.locator('p, ul, ol, div > p');
      const contentCount = await content.count();

      if (contentCount > 0) {
        await expect(content.first()).toBeVisible();
      }
    }
  });
});
