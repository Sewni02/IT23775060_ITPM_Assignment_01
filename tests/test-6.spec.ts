import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('aunty, adha mama havasata cake ekak hadhanava. oyaa office gihin edhdhi flour 1kg, 4 eggs, sugar 500g saha butter 500g aragena enna puluvandha? mama oyata salli bank transfer karannam. badu tika aragena mata whatsApp msg ekak danna. mama paarata ennam ');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByText('ඖන්ට්ය්, අද මම හවසට cake').click();
 
});