import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama adha gedhara yanavaa. mata iilaga sathiye presentation ekak thiyena nisaa mee sathiye gedhara yanna oone.');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByText('මම අද ගෙදර යනවා. මට ඊලග සතියෙ presentation').click();
  
});