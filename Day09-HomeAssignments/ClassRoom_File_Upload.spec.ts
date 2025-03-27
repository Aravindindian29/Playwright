import {test,expect} from "@playwright/test";
test(`Uploading the file`,async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("aravind95.max213@agentforce.com");
    await page.locator("#password").fill("Playwright@123");
    await page.locator("#Login").click();
    page.waitForLoadState('load')

    await page.locator(".slds-icon-waffle").click();
    await page.locator("(//button[@class='slds-button'])[2]").click();
    await page.locator("//input[@class='slds-input']").fill("Accounts");
    const searchResult = page.locator("//p[@class='slds-truncate']");
    await expect(searchResult).toBeVisible({timeout:3000})
    await searchResult.click();
    page.waitForLoadState('load')
    const newBtn = page.locator("//div[text()='New']");
    await expect(newBtn).toBeVisible({timeout:5000})
    newBtn.click();
    await page.fill("//input[@name='Name']","Asta");
    await page.locator("//div[@class='slds-grid slds-size_1-of-1 label-stacked']").filter({hasText:"Rating"}).locator("//span[text()='--None--']").click();
    await page.locator("//span[text()='Warm']").click();
    await page.locator("//div[@class='slds-grid slds-size_1-of-1 label-stacked']").filter({hasText:"Type"}).locator("//span[text()='--None--']").click();
    await page.locator("//span[text()='Prospect']").click();
    await page.locator("//div[@class='slds-grid slds-size_1-of-1 label-stacked']").filter({hasText:"Industry"}).locator("//span[text()='--None--']").click();
    await page.locator("//span[text()='Banking']").click();
    await page.locator("//div[@class='slds-grid slds-size_1-of-1 label-stacked']").filter({hasText:"Ownership"}).locator("//span[text()='--None--']").click();
    await page.locator("//span[text()='Public']").click();
    await page.click("//button[@name='SaveEdit']");
    const toastMsg=page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']");
    await expect(toastMsg).toBeVisible();
    await page.waitForLoadState('load');
    const filePromise = page.waitForEvent('filechooser');
    page.locator("//span[@class='slds-file-selector__button slds-button slds-button_neutral']").click();
    const fileUpload = await filePromise;
    fileUpload.setFiles("tests/DAta/tuple.png");
   const doneBtn= page.locator("//span[text()='Done']")
    await expect(doneBtn).toBeVisible({timeout:3000})
   await doneBtn.click();
   const uploadedFile = page.locator("//span[@class='itemTitle slds-text-body--regulardesktop uiOutputText']");
   await expect(uploadedFile).toBeVisible({timeout:5000})
   const fileUploaded = await uploadedFile.innerText();

    if(fileUploaded===`tuple`){
        console.log(`The uploaded file is tuple.png`);
    }
    else
    console.log(`Some other file is uploaded`);
    
    
})