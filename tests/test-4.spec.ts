import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('heta trip eka yanne naethuva imu ehaata 150mm valata vadaa vaediyen vaessa kiyalaa news valata kivva eeka nisaa api kattiyama haemomava set karagena vena dhavasaka kandy yamuu train ekee ');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByText('හෙට trip').click();
  
});