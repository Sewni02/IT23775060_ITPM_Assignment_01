import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ado aluth resturant ekak thiyanava ');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ado aluth resturant ekak thiyanava BYOB');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ado aluth resturant ekak thiyanava BYOB option is available');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByText('ado අලුත් රෙස්ටුරන්ට් එකක් තියනව BYOB option ඉස් available').click();
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