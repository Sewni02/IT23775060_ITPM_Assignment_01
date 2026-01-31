import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ammatasiri! adha nam beach ekee raella saera vadi wage. ee nisaa api adha yanne naethuva imudha?');
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
  await page.getByRole('button', { name: 'Copy' }).nth(1).press('ArrowLeft');
  await page.getByRole('button', { name: 'Copy' }).nth(1).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
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
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ammatasiri! adha nam beach ekee raella saera vadi vage. ee nisaa api adha yanne naethuva imudha?');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).nth(1).click();
});