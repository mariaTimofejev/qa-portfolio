const { test, expect } = require('@playwright/test');

test('otsing töötab', async ({ page }) => {
  await page.goto('https://example.com');

  await page.fill('input[name=search]', 'test');

  await page.press('input[name=search]', 'Enter');

  await expect(page.locator('.results')).toBeVisible();
});
