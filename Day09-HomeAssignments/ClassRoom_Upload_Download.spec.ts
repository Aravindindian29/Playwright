import {test,expect} from "@playwright/test";
test(`Uploading the file`,async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")
    page.waitForLoadState('load')

   const filePromise= page.waitForEvent('filechooser')
   page.click("#drag-drop-upload")
   const fileUpload = await filePromise
   fileUpload.setFiles("tests/Data/tuple.png")
   await page.waitForTimeout(3000)
   const locator= page.locator("(//div[@class='dz-filename'])[1]/span");
   expect(locator).toBeAttached({attached:true})
})

test(`Downloading the file`, async({page})=>{
    const currentDate = new Date();
    const currentDateTime = currentDate.toISOString()
        .replace(/[-:]/g, '')   
        .replace('T', '_')      
        .split('.')[0];
    await page.goto("https://the-internet.herokuapp.com/download")
    page.waitForLoadState('load')

    const filePromise = page.waitForEvent('download')
    page.click("//a[text()='example.json']")
    const fileDownload = await filePromise;
    await page.waitForTimeout(3000)
    fileDownload.saveAs("tests/Data/"+fileDownload.suggestedFilename()+"_"+currentDateTime)
})