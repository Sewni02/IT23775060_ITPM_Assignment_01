import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('machan, mage birthday party eka  2026-07-15 thiyenavaa. date eka reserve karaganin havasa 4pm wedhdhi ape gedharata varen, kattiyama set vela BBQ party ekak dhaanna inne. oyaata enakota JBL eka aragena enna puluvandha?');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByText('මචන්, mage birthday party එක').click();
});