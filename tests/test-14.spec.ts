import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('velavata ethenata palayan. gihin missed call ekak dhapan');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('velavata ethenata palayan. gihin missed call ekak dhaapan');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('velavata ethenata palayan. gihin missed call ekak dhaapan.');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByText('වෙලවට එතෙනට පලයන්. ගිහින්').click();
});