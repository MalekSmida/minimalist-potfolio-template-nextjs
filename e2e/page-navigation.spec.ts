import { test, expect } from '@playwright/test';

test.describe('Page Navigation', () => {
  test('should navigate between all pages via navigation menu', async ({ page }) => {
    await page.goto('/');

    // Check navigation header is visible
    const nav = page.locator('header nav');
    await expect(nav).toBeVisible();

    // Navigate to Career page
    await page.getByRole('link', { name: /career/i }).click();
    await expect(page).toHaveURL('/career');
    await expect(page.getByRole('heading', { name: 'My Career Journey' })).toBeVisible();

    // Navigate to Consulting page
    await page.getByRole('link', { name: /consulting/i }).click();
    await expect(page).toHaveURL('/consulting');
    await expect(page.getByRole('heading', { name: 'Consulting Services' })).toBeVisible();

    // Navigate to Contact page
    await page.getByRole('link', { name: /contact/i }).click();
    await expect(page).toHaveURL('/contact');
    await expect(page.getByRole('heading', { name: 'Get In Touch 👋' })).toBeVisible();

    // Navigate back to About/Home page
    await page.getByRole('link', { name: /about/i }).click();
    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: /Hi, I am/i })).toBeVisible();
  });

  test('should navigate via buttons in page content', async ({ page }) => {
    await page.goto('/');

    // Check for "Let's discuss your needs" button on home page
    const contactButton = page.getByRole('link', { name: /discuss your needs/i });
    if (await contactButton.isVisible()) {
      await contactButton.click();
      await expect(page).toHaveURL('/contact');
    }

    // Go to consulting page
    await page.goto('/consulting');

    // Check for contact buttons on consulting page
    const consultingContactButtons = page.getByRole('link', { name: /contact/i });
    const buttonCount = await consultingContactButtons.count();
    
    if (buttonCount > 0) {
      await consultingContactButtons.first().click();
      await expect(page).toHaveURL('/contact');
    }

    // Check career navigation from consulting page
    await page.goto('/consulting');
    const careerLink = page.getByRole('link', { name: /experience/i });
    if (await careerLink.isVisible()) {
      await careerLink.click();
      await expect(page).toHaveURL('/career');
    }
  });

  test('should have working navigation header on all pages', async ({ page }) => {
    const pages = [
      { url: '/', heading: /Hi, I am/i },
      { url: '/career', heading: 'My Career Journey' },
      { url: '/consulting', heading: 'Consulting Services' },
      { url: '/contact', heading: 'Get In Touch 👋' },
    ];

    for (const { url, heading } of pages) {
      await page.goto(url);
      
      // Check navigation header is visible
      const nav = page.locator('header nav');
      await expect(nav).toBeVisible();
      
      // Check page content loaded
      await expect(page.getByRole('heading', { name: heading })).toBeVisible();
      
      // Check all navigation links are present
      await expect(page.getByRole('link', { name: /about/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /career/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /consulting/i })).toBeVisible();
      await expect(page.getByRole('link', { name: /contact/i })).toBeVisible();
    }
  });

  test('should have working dark mode toggle on all pages', async ({ page }) => {
    const pages = ['/', '/career', '/consulting', '/contact'];

    for (const url of pages) {
      await page.goto(url);
      
      // Find dark mode toggle
      const darkModeToggle = page.locator('button[aria-label*="dark mode"]');
      await expect(darkModeToggle).toBeVisible();
      
      // Toggle dark mode
      await darkModeToggle.click();
      
      // Check if dark mode classes are applied
      const body = page.locator('body');
      // Note: Dark mode implementation might vary, adjust selector as needed
      await expect(body).toHaveClass(/dark:/);
    }
  });

  test('should maintain scroll position and navigation state', async ({ page }) => {
    await page.goto('/');
    
    // Scroll down on home page
    await page.evaluate(() => window.scrollTo(0, 500));
    
    // Navigate to another page
    await page.getByRole('link', { name: /career/i }).click();
    await expect(page).toHaveURL('/career');
    
    // Navigate back
    await page.getByRole('link', { name: /about/i }).click();
    await expect(page).toHaveURL('/');
    
    // Check that we're at the top of the page (normal browser behavior)
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBe(0);
  });

  test('should handle direct URL navigation', async ({ page }) => {
    // Test direct navigation to each page
    const pages = [
      { url: '/career', heading: 'My Career Journey' },
      { url: '/consulting', heading: 'Consulting Services' },
      { url: '/contact', heading: 'Get In Touch 👋' },
      { url: '/', heading: /Hi, I am/i },
    ];

    for (const { url, heading } of pages) {
      await page.goto(url);
      await expect(page.getByRole('heading', { name: heading })).toBeVisible();
      
      // Check navigation is still working
      const nav = page.locator('header nav');
      await expect(nav).toBeVisible();
    }
  });
});