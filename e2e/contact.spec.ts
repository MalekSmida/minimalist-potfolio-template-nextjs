import { test, expect } from '@playwright/test';

test.describe('Contact Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Scroll to contact section
    await page.locator('button', { hasText: 'Contact' }).click(); // Assuming your button title is "Contact"
    await page.locator('#contact').isVisible({ timeout: 5000 }); // Wait up to 5 seconds for the contact section to be visible
  });

  test('should have contact information in footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Check for contact section
    const contactSection = footer.locator('section#contact');
    await expect(contactSection).toBeVisible();

    // Check for email link if provided
    const emailLink = contactSection.locator('a[href^="mailto:"]');
    const emailCount = await emailLink.count();
    if (emailCount > 0) {
      await expect(emailLink).toHaveAttribute('href', /^mailto:/);
    }

    // Check for phone link if provided
    const phoneLink = contactSection.locator('a[href^="tel:"]');
    const phoneCount = await phoneLink.count();
    if (phoneCount > 0) {
      await expect(phoneLink).toHaveAttribute('href', /^tel:/);
    }

    // Check for address if provided
    const address = contactSection.locator('address');
    const addressCount = await address.count();
    if (addressCount > 0) {
      await expect(address).toBeVisible();
    }
  });

  test('should have working social media links', async ({ page }) => {
    const footer = page.locator('footer');
    const socialLinks = footer.locator('a[href*="github.com"], a[href*="linkedin.com"]');
    const count = await socialLinks.count();

    if (count > 0) {
      // Check that links open in new tab
      for (let i = 0; i < count; i++) {
        const link = socialLinks.nth(i);
        await expect(link).toHaveAttribute('target', '_blank');
        await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      }
    }
  });

  test('should have copyright section', async ({ page }) => {
    const footer = page.locator('footer');
    const copyrightSection = footer.locator('section:last-child');
    await expect(copyrightSection).toBeVisible();

    // Check for current year
    const currentYear = new Date().getFullYear();
    await expect(copyrightSection).toContainText(currentYear.toString());

    // Check for repository link if provided
    const repoLink = copyrightSection.locator('a[href*="github.com"]');
    const repoCount = await repoLink.count();
    if (repoCount > 0) {
      await expect(repoLink).toHaveAttribute('target', '_blank');
      await expect(repoLink).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });
});
