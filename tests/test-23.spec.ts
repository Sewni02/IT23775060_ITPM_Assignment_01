import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha udhee mama bank ekata giyee account issue ekak thiyena nisaa. queue eka loku vaedi nisaa mata tika velaavak ethena inna unaa. counter ekee officer mata form ekak fill karanna dhunnaa sahaa ');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha udhee mama bank ekata giyee account issue ekak thiyena nisaa. queue eka loku vaedi nisaa mata tika velaavak ethena inna unaa. counter ekee officer mata form ekak fill karanna dhunnaa sahaa NIC ');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha udhee mama bank ekata giyee account issue ekak thiyena nisaa. queue eka loku vaedi nisaa mata tika velaavak ethena inna unaa. counter ekee officer mata form ekak fill karanna dhunnaa sahaa NIC copy ekak ganna kivvaa. ee tika copy karalaa submit karaata passe issue eka solve unaa kiyalaa kivvaa. passe mama ');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha udhee mama bank ekata giyee account issue ekak thiyena nisaa. queue eka loku vaedi nisaa mata tika velaavak ethena inna unaa. counter ekee officer mata form ekak fill karanna dhunnaa sahaa NIC copy ekak ganna kivvaa. ee tika copy karalaa submit karaata passe issue eka solve unaa kiyalaa kivvaa. passe mama ATM ');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha udhee mama bank ekata giyee account issue ekak thiyena nisaa. queue eka loku vaedi nisaa mata tika velaavak ethena inna unaa. counter ekee officer mata form ekak fill karanna dhunnaa sahaa NIC copy ekak ganna kivvaa. ee tika copy karalaa submit karaata passe issue eka solve unaa kiyalaa kivvaa. passe mama ATM machine eken cash aragena edhdhi office ekata late wei kiyalaa hithuvara ehema unee naehae.');
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
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adha udhee mama bank ekata giyee account issue ekak thiyena nisaa. queue eka loku vaedi nisaa mata tika velaavak ethena inna unaa. counter ekee officer mata form ekak fill karanna dhunnaa sahaa NIC copy ekak ganna kivvaa. ee tika copy karalaa submit karaata passe issue eka solve unaa kiyalaa kivvaa. passe mama ATM machine eken cash aragena edhdhi office ekata late wei kiyalaa hithuvata ehema unee naehae.');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByText('අද උදේ මම bank එකට ගියේ').click();
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