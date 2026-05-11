const { test, expect } = require('@playwright/test');

test('kasutaja saab sisse logida', async ({ page }) => {
  await page.goto('https://example.com');

  await page.click('text=Login');

  await page.fill('#email', 'test@example.com');
  await page.fill('#password', '123456');

  await page.click('button[type=submit]');

  await expect(page).toHaveURL('https://example.com/dashboard');
});
