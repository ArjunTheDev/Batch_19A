// @ts-check
import { test, expect } from '@playwright/test';

test('Switch tab between Home Page and New Page', async ({ page }) => {
  // Go to the app
  await page.goto('http://localhost:5000/');

  // ✅ Check initial home page text
  await expect(page.locator('h3')).toHaveText('Home Page');

  // ✅ Click the button to switch tab
  await page.getByRole('button', { name: 'Switch Tab' }).click();

  // ✅ Verify new page appears
  await expect(page.locator('h3')).toHaveText('New Page');
});
