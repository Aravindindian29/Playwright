import test from "@playwright/test";

test(`Edit Lead `,  async({page})=>{

await page.goto(`http://leaftaps.com/opentaps/control/main`)

await page.locator("#username").fill("demoSalesManager")
await page.locator("#password").fill("crmsfa")
await page.locator("#password").fill("crmsfa")
await page.locator(".decorativeSubmit").click()
await page.locator("//a[contains(text(),'CRM/SFA')]").click()
await page.locator("//a[contains(text(),'Leads')]").click()
await page.locator("//a[contains(text(),'Create Lead')]").click()
await page.locator("#createLeadForm_companyName").fill("ADF")
await page.locator("#createLeadForm_firstName").fill("KS")
await page.locator("#createLeadForm_lastName").fill("Aravind")
await page.locator(".smallSubmit").click()
await page.locator("//a[contains(text(),'Edit')]").click()
await page.locator("#updateLeadForm_companyName").fill("Applied Data Finance")
await page.locator("(//input[@name='submitButton'])[1]").click()
await page.waitForTimeout(5000)
})