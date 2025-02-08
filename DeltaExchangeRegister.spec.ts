import { test, expect } from '@playwright/test';
var JSONValues = require('../storageState.json');

test('Sign up test on Delta Exchange', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://devnet.delta.exchange/');
    await console.log("Navigated to Delta Exchange website");

    // Click on the sign up button
    await page.click('text=Sign Up');

    // Fill in the sign up form
    var random = Math.floor(Math.random() * 10000); // since every time i run the script, it should generate a new email, else it will fail with error that this email already exists.
    await page.fill(JSONValues.EmailXpath, JSONValues.username+random+'@gmail.com');
    await page.fill(JSONValues.passwordXpath, JSONValues.password);
    await page.click(JSONValues.registerbuttonXpath);
    await console.log("Filled in the sign up form");

    //there is a captcha coming up after this step hence unable to proceed via Automation (Manual intervention needed in headed mode).
    
    // Wait for the verification code input to appear
    await page.waitForSelector(JSONValues.codeXpath);

    // Enter the verification code
    var j=6
    for(var i=1;i<=6;i++){
        await page.fill(JSONValues.codeXpath2 +i+"]", j.toString());
        j--;
    }
    await console.log("Filled in the verification code");
    //await page.click(JSONValues.submitbtnXpath); // This is commented since the redirection is happening without clicking on submit button.

    // Assert a successful message
    await page.waitForSelector(JSONValues.successmssgXpath,{timeout:60000})
    var successMessage = await page.locator(JSONValues.successmssgXpath).isVisible({ timeout: 60000 });
    await expect(successMessage).toBeTruthy();
    await console.log("Sign up successful");
});