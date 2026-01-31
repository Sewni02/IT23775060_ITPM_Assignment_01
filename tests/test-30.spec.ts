import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaata kohomada? hodin innawa athi kiyala hithenawa. ');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaata kohomada? hodin innawa athi kiyala hithanawa. ');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByText('ඔයාට කොහොමඩ? හොඩින් ඉන්නw').click();
});