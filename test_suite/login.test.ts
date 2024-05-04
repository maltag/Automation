import {chromium, test} from '@playwright/test';


test("Open login page modal", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.demoblaze.com/");
    await page.click("id=narvbarx");
    // await page.click('ul.narvbarx > li > a:has-text("Log in")');

    // await page.locator('narvbarx', { hasText: 'Log in' }).click({ timeout: 5000 });


});
test("Close Modal", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.demoblaze.com/");
    await page.click("id=narvbarx");
    await page.click('ul.navbarExample > li > a:has-text("Log in")');

    // await page.getByRole('button', { name: 'x' }).click();

});

// test("Valid credentials", async () => {

//     const browser = await chromium.launch();
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     await page.goto("https://www.demoblaze.com/");
//     await page.click("id=login2");

// });

// test("Invalid credentials", async () => {

//     const browser = await chromium.launch();
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     await page.goto("https://www.demoblaze.com/");
//     await page.click("id=login2");

// });

