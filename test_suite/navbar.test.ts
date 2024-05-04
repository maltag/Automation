import {chromium, test} from '@playwright/test';


test("Click on IMG", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://automationpractice.com/");
    await page.click("id=login2");

});


