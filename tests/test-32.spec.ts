import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ape scle ekee mee paara ');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ape scle ekee mee paara ');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ape scle ekee mee paara AL ');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ape scle ekee mee paara AL result siiyata siiyai. godak lamai campus yai.');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByText('ape සcලෙ එකේ මේ පාර AL result').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).nth(1).click();
});