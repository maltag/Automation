import {chromium, test} from '@playwright/test';


test("Login to demoBlaze", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.demoblaze.com/");
    await page.click("id=login2");

});

