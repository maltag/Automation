import {chromium, test} from '@playwright/test';


test("Open login page modal", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.demoblaze.com/");
    await page.click("id=narvbarx");
    await page.locator("id=narvbarx", { hasText: 'Log in' }).click({ timeout: 5000 });

});
test("Valid credentials validation", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const isLoggedIn = await page.url() === 'https://www.demoblaze.com/';
    await page.goto("https://www.demoblaze.com/");
    await page.click("id=login2");
    await page.locator("id=narvbarx", { hasText: 'Log in' }).click({ timeout: 5000 });
    await page.fill('input[name="loginusername"]', 'Admin');
    await page.fill('input[name="id="loginpassword"]', 'admin'); 
    await page.click('button[onclick="logIn()"]]');

});

// test("Invalid credentials validation", async () => {

//     const browser = await chromium.launch();
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     await page.goto("https://www.demoblaze.com/");
//     await page.click("id=login2");
//     await page.locator("id=narvbarx", { hasText: 'Log in' }).click({ timeout: 5000 });
//     await page.fill('input[name="loginusername"]', 'Admin');
//     await page.fill('input[name="id="loginpassword"]', 'admin'); 
//     await page.click('button[onclick="logIn()"]]');


// });

// test("Close Modal", async () => {

//     const browser = await chromium.launch();
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     await page.goto("https://www.demoblaze.com/");
//     await page.click("id=narvbarx");
//     // await page.click('ul.navbarExample > li > a:has-text("Log in")');
//     await page.getByRole('listitem').filter({ hasText: /Log in/ }).getByRole('button', { name: 'Log in' })
//     .click();
//     // await page.getByRole('button', { name: 'x' }).click();

// });





