import { test, expect } from '@playwright/test';

test.describe('Navigation and UI Controls', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have working navigation', async ({ page }) => {
    // Get all navigation links
    const navLinks = page.locator('nav a');
    const count = await navLinks.count();

    // Test each navigation link scrolls to the correct section
    for (let i = 0; i < count; i++) {
      const link = navLinks.nth(i);
      const href = await link.getAttribute('href');

      if (href && href.startsWith('#')) {
        const sectionId = href.substring(1);

        // Click the link
        await link.click();

        // Check if the section is visible in viewport
        const section = page.locator(`#${sectionId}`);
        await expect(section).toBeVisible();

        // Check if section is in viewport
        const isInViewport = await section.evaluate((el) => {
          const rect = el.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        });

        expect(isInViewport).toBeTruthy();
      }
    }
  });

  test('should have working dark mode toggle', async ({ page }) => {
    // Find the dark mode toggle button
    const darkModeToggle = page.locator('[aria-label="Switch to dark mode"]');
    await expect(darkModeToggle).toBeVisible();

    // Check initial theme state
    const initialTheme = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    // Toggle dark mode
    await darkModeToggle.click();

    // Check if theme changed
    const newTheme = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    expect(newTheme).not.toEqual(initialTheme);

    // Wait for the aria-label to change to "Switch to light mode"
    const lightModeToggle = page.locator('[aria-label="Switch to light mode"]');
    await expect(lightModeToggle).toBeVisible();

    // Toggle back light mode
    await lightModeToggle.click();

    // Check if theme reverted
    const finalTheme = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });

    expect(finalTheme).toEqual(initialTheme);
  });

  test('should have working back to top button', async ({ page }) => {
    // Scroll to bottom
    await page.evaluate(() => {
      window.scrollTo(0, 500); // Scroll past the 300px threshold
    });

    // Find back to top button (might only appear after scrolling)
    const backToTopButton = page.locator('[aria-label="Scroll to top"]');
    await expect(backToTopButton).toBeVisible({ timeout: 5000 });

    // Click back to top
    await backToTopButton.click();

    // Wait a bit for scroll to complete
    await page.waitForTimeout(300);

    // Check if we're back at the top
    const scrollPosition = await page.evaluate(() => {
      return window.scrollY;
    });

    expect(scrollPosition).toBeLessThan(100);
  });

  test('should have working scroll indicator', async ({ page }) => {
    // Find the scroll progress indicator
    const scrollIndicator = page.locator('[aria-label="Page scroll progress"]');

    // Initial value should be 0 or very low
    const initialValue = await scrollIndicator.getAttribute('aria-valuenow');
    const initialNumber = initialValue ? parseInt(initialValue) : 0;
    expect(initialNumber).toBeLessThan(10);

    // Scroll down and check if the value increases
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight / 2);
    });

    // Wait a bit for the scroll event to be processed
    await page.waitForTimeout(300);

    const midValue = await scrollIndicator.getAttribute('aria-valuenow');
    const midNumber = midValue ? parseInt(midValue) : 0;

    expect(midNumber).toBeGreaterThan(initialNumber);
  });
});
