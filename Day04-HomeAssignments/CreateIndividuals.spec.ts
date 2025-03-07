import test from "@playwright/test";

let name="Aravind";

test.only(`Create Individuals `, async({page})=>{

await page.goto("http://login.salesforce.com")


await page.locator("#username").fill("vidyar@testleaf.com")
await page.locator("#password").fill("Sales@123")
await page.locator("#Login").click()
await page.waitForTimeout(6000)
await page.locator(".slds-icon-waffle").click()
await page.locator("//button[text()='View All']").click()
await page.waitForTimeout(3000)
await page.locator("(//input[@class='slds-input'])[1]").fill("Individuals")
await page.locator("//p[@class='slds-truncate']//mark[text()='Individuals']").click()
await page.waitForTimeout(3000)
await page.locator("//div[@class='slds-context-bar__label-action slds-p-left_none slds-p-right_x-small']").click()
await page.waitForTimeout(3000)
await page.locator("//span[contains(text(),'New Individual')]").click()
await page.locator("//input[@class='lastName compoundBLRadius compoundBRRadius form-element__row input']").fill(`${name}`)
await page.locator("//button[@class='slds-button slds-button_neutral uiButton--brand uiButton forceActionButton']").click()
await page.waitForTimeout(3000)
})