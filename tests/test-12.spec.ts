import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama eyagen assignment eka submit karadha kiyalaa ahuvama " ov ov dhaemmaa dhaemmaa " kiyalaa kenthiyen kivvaa');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByText('මම එයගෙන් assignment එක').click();
});