import { test, expect } from '@playwright/test';

// Simple smoke test for mobile emulation
test('homepage loads on mobile', async ({ page }) => {
  await page.goto('/');
  // Prefer title check but be tolerant if title differs
  const title = (await page.title()).toLowerCase();
  expect(title.length).toBeGreaterThan(0);

  // Check that a main or header element is present (at least one)
  const mainLocator = page.locator('main, header, [role="main"]');
  const mainCount = await mainLocator.count();
  expect(mainCount).toBeGreaterThan(0);
});
