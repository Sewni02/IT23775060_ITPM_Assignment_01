import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata weekdays & weekend uni ekata yanna welaa, bt i can\'t do that ');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata weekdays & weekend uni ekata yanna velaa, bt i can\'t do that ');
  await page.getByText('මට weekdays & weekend uni').click();
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