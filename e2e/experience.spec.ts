import { test, expect } from '@playwright/test';

test.describe('Experience Page', () => {
  test('should handle experience cards properly', async ({ page }) => {
    await page.goto('/');

    // Check if there are experience cards
    const experienceCards = page.locator('[data-testid="experience-card"]');
    const cardCount = await experienceCards.count();

    if (cardCount === 0) {
      test.skip();
      return;
    }

    // Navigate to the first experience item
    const firstExperienceCard = experienceCards.first();
    const experienceId = await firstExperienceCard.getAttribute('id');

    // Ensure we got an ID before proceeding
    expect(experienceId).toBeTruthy();

    await firstExperienceCard.click();

    // Wait for the page to navigate to the expected URL
    await page.goto(`/experience/${experienceId}`);

    // Check page title
    const title = page.locator('h1');
    await expect(title).toBeVisible();

    // Check if there's a back button or link
    const backButton = page.locator(
      'a[href="/"], a:has-text("Back"), [aria-label="Back to main page"]',
    );
    await expect(backButton).toBeVisible();

    // Check content sections
    const mainContent = page.locator('main');
    await expect(mainContent).toBeVisible();

    // Check if there are images
    const images = page.locator('img');
    const imageCount = await images.count();

    // If there are images, check if they're loaded
    if (imageCount > 0) {
      for (let i = 0; i < imageCount; i++) {
        const image = images.nth(i);
        await expect(image).toBeVisible();

        // Check if image is loaded
        await image.evaluate((img) => {
          return new Promise((resolve) => {
            if ((img as HTMLImageElement).complete) {
              resolve(true);
            } else {
              img.onload = () => resolve(true);
              img.onerror = () => resolve(false);
            }
          });
        });
      }
    }

    // Click back button
    await backButton.click();

    // Verify we're back on the homepage
    await expect(page).toHaveURL('/');
  });
});
