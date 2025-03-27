import { test, expect } from "@playwright/test";
import { log } from "node:console";
test(`Handling windows`, async ({ page, context }) => {

    await page.goto("https://login.salesforce.com/");

    await page.fill("#username", "vidyar@testleaf.com");
    await page.fill("#password", "Sales@123");
    await page.click("#Login");

    await page.waitForLoadState('load');
    const learnMoreBtn = page.locator(".carouselCard").filter({ hasText: "Mobile Publisher" }).locator("//button[@class='slds-button slds-button_brand']");
    await expect(learnMoreBtn).toBeVisible({ timeout: 9000 })

    const [muiltplePages] = await Promise.all([
        context.waitForEvent('page'),
        learnMoreBtn.click()
    ])


    const allPages = muiltplePages.context().pages();

    for (let i = 0; i < allPages.length; i++) {
        await allPages[i].waitForLoadState('load')
        const allPageTitle = await allPages[i].title();

        if (allPageTitle[i] === allPageTitle[1]) {
            console.log(`The title of the second page is: ${allPageTitle}`);

        }
    }
})