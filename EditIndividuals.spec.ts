import test from "@playwright/test";

let name="Aravind";

test.only(`Edit Individuals `, async({page})=>{

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
await page.waitForTimeout(2000)
await page.locator(`(//a//span[contains(text(),'${name}')])[1]`).click()
await page.locator(`//a//div[text()='Edit']`).click()
await page.locator(`(//a[@class='select'])[1]`).click()
await page.waitForTimeout(2000)
await page.locator(`//ul[@class='scrollable']//li[2]//a[text()='Mr.']`).click()
await page.locator(`//button[@class='slds-button slds-button_neutral uiButton--brand uiButton forceActionButton']`).click()
await page.waitForTimeout(3000)

})