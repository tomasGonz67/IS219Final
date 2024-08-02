const { test, expect } = require('@playwright/test');

test('should display the home page', async ({ page }) => {
    await page.goto('/'); // Go to the home page
    await expect(page).toHaveTitle(/Welcome to Our Website/); // Check if title contains text
    await expect(page.locator('text="We use cookies on our site."')).toBeVisible(); // Check if cookie banner text is visible
});