import {chromium,firefox, test} from "@playwright/test";

test("Launch browser", async ()=> {

    const browserEdge = await chromium.launch({channel:'msedge', headless: false});

    const contextEdge = await browserEdge.newContext();
    
    const pageEdge = await contextEdge.newPage();

    await pageEdge.goto("https://www.redbus.in/");

    console.log(`The title of the page is ${await pageEdge.title()}`);

    console.log(`The url of the page is ${pageEdge.url()}`);


const browserFirefox = await firefox.launch({headless: false});

const contextFirefox = await browserFirefox.newContext();

const pageFirefox = await contextFirefox.newPage();

    await pageFirefox.goto("https://www.flipkart.com/");

    console.log(`The title of the page is ${await pageFirefox.title()}`);

    console.log(`The url of the page is ${pageFirefox.url()}`);

    
})