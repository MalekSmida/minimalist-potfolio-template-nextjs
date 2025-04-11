import { test, expect } from '@playwright/test';

// local imports
import { defaultSiteConfig } from '@/services/siteConfigService';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(defaultSiteConfig.metaDataData.title);
  });

  test('should have proper meta description', async ({ page }) => {
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute(
      'content',
      defaultSiteConfig.metaDataData.description,
    );
  });

  test('should have skip to main content link', async ({ page }) => {
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeVisible();
    await expect(skipLink).toHaveClass(/sr-only/);

    // Focus the link and check if it becomes visible
    await skipLink.focus();
    await expect(skipLink).toHaveClass(/focus:not-sr-only/);
  });

  test('should have main content landmark', async ({ page }) => {
    const main = page.locator('main#main-content');
    await expect(main).toBeVisible();
    await expect(main).toHaveAttribute('role', 'main');
  });

  test('should have accessible footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer).toHaveAttribute('role', 'contentinfo');
    await expect(footer).toHaveAttribute('aria-label', 'Site footer');
  });

  test('should have working scroll progress indicator', async ({ page }) => {
    const progressBar = page.locator('[role="progressbar"]');
    await expect(progressBar).toHaveAttribute('aria-label', 'Page scroll progress');
    await expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    await expect(progressBar).toHaveAttribute('aria-valuemax', '100');

    // Scroll down and check if progress updates
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    const progress = await progressBar.getAttribute('aria-valuenow');
    expect(Number(progress)).toBeGreaterThan(0);
    expect(Number(progress)).toBeLessThanOrEqual(100);
  });
});
