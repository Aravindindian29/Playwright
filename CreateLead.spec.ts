import test from "@playwright/test";

let name="Aravind";

test.only(`Create Lead `, async({page})=>{

await page.goto("http://login.salesforce.com")


await page.locator("#username").fill("vidyar@testleaf.com")

await page.locator("#password").fill("Sales@123")

await page.locator("#Login").click()

await page.waitForTimeout(6000)

await page.locator(".slds-icon-waffle").click()

await page.locator("//button[text()='View All']").click()

await page.locator("//p[text()='Sales']").click()

await page.waitForTimeout(6000)

await page.locator("(//span[text()='Leads'])[1]").click()

await page.locator("//div[text()='New']").click()

await page.locator("//button[@name='salutation']").click()

await page.locator("//span[@class='slds-media__body']//span[text()='Mr.']").click()

await page.locator("//input[@name='lastName']").fill(`${name}`)

await page.locator("//input[@name='Company']").fill("Applied Data Finance")

await page.locator("//button[@name='SaveEdit']").click()

await page.waitForTimeout(3000)

})