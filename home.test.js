// tests/heroSection.test.js
const { test, expect } = require('@playwright/test');

test('should display the hero section with correct text and styles', async ({ page }) => {
    await page.goto('/'); // Navigate to the home page

    // Verify the hero section
    const heroSection = page.locator('text="Welcome to Our Website"');
    await expect(heroSection).toBeVisible(); // Check visibility

    // Check for the hero section text and its styling
    await expect(heroSection).toHaveCSS('font-family', 'Ribeye, sans-serif');
    await expect(heroSection).toHaveCSS('color', 'rgb(163, 167, 145)'); // Text color #A3A791
    await expect(heroSection).toHaveCSS('text-shadow', '1px 1px 0 rgb(0, 0, 0), -1px -1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0)'); // Text shadow effect

    // Verify the secondary text
    const secondaryText = page.locator('text="We offer the best services for you"');
    await expect(secondaryText).toBeVisible(); // Check visibility

    // Check for the secondary text styles
    await expect(secondaryText).toHaveCSS('font-family', 'Ribeye, sans-serif');
    await expect(secondaryText).toHaveCSS('color', 'rgb(163, 167, 145)'); // Text color #A3A791
    await expect(secondaryText).toHaveCSS('text-shadow', '1px 1px 0 rgb(0, 0, 0), -1px -1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0)'); // Text shadow effect

    // Verify the button and its properties
    const button = page.locator('button:has-text("JOIN TODAY")');
    await expect(button).toBeVisible(); // Check visibility
    await expect(button).toHaveCSS('background-color', 'rgb(163, 167, 145)'); // Button background color #A3A791
    await expect(button).toHaveCSS('color', 'rgb(44, 0, 0)'); // Button text color #2C0000
    await expect(button).toHaveCSS('font-family', 'Ribeye Marrow, sans-serif');
    await expect(button).toHaveCSS('border-radius', '100px'); // Button border radius
    await expect(button).toHaveCSS('font-size', '24px');
});
