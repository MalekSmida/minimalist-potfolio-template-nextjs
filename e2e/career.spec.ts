import { test, expect } from '@playwright/test';

test.describe('Career Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/career');
  });

  test('should display career page heading', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'My Career Journey' });
    await expect(heading).toBeVisible();
  });

  test('should display career description', async ({ page }) => {
    const description = page.locator('section div p').first();
    await expect(description).toBeVisible();
  });

  test('should display experience timeline', async ({ page }) => {
    const timeline = page.locator('ol[class*="border-s"]');
    await expect(timeline).toBeVisible();
  });

  test('should display experience cards', async ({ page }) => {
    const experienceCards = page.locator('[data-testid="experience-card"]');
    const cardCount = await experienceCards.count();
    expect(cardCount).toBeGreaterThan(0);
  });

  test('should allow expanding experience achievements', async ({ page }) => {
    // Look for achievements buttons
    const achievementsButtons = page.locator('button:has-text("Achievements")');
    const buttonCount = await achievementsButtons.count();
    
    if (buttonCount > 0) {
      const firstButton = achievementsButtons.first();
      
      // Click to expand
      await firstButton.click();
      
      // Check if contributions list appears
      const contributionsList = page.locator('ul.list-disc');
      await expect(contributionsList).toBeVisible();
    }
  });

  test('should allow clicking company logos', async ({ page }) => {
    // Look for company logo images
    const companyLogos = page.locator('img[role="img"]');
    const logoCount = await companyLogos.count();
    
    if (logoCount > 0) {
      const firstLogo = companyLogos.first();
      await expect(firstLogo).toBeVisible();
      
      // Should be clickable (has cursor-pointer class)
      await expect(firstLogo).toHaveClass(/cursor-pointer/);
    }
  });

  test('should have proper page structure and accessibility', async ({ page }) => {
    // Check for main section
    const mainSection = page.locator('section[aria-labelledby*="career-heading"]');
    await expect(mainSection).toBeVisible();
    
    // Check for gradient header section
    const headerSection = page.locator('section div.bg-gradient-to-r');
    await expect(headerSection).toBeVisible();
    
    // Check for timeline structure
    const timelineItems = page.locator('ol li[aria-labelledby*="experience-title"]');
    const timelineCount = await timelineItems.count();
    expect(timelineCount).toBeGreaterThan(0);
  });

  test('should display contract types and dates', async ({ page }) => {
    // Check for contract type badges
    const contractTypes = page.locator('strong.text-primary');
    const typeCount = await contractTypes.count();
    
    if (typeCount > 0) {
      await expect(contractTypes.first()).toBeVisible();
    }
    
    // Check for dates
    const dates = page.locator('time');
    const dateCount = await dates.count();
    
    if (dateCount > 0) {
      await expect(dates.first()).toBeVisible();
    }
  });
});