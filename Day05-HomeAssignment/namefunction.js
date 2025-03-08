let browser = "Chrome";
function checkBrowserVersion(callback){  
setTimeout(() => {
    console.log(`Waiting for data from a server`);
    log(callback);
}, 2000);
}
function log(){
    console.log(`The browser version is: ${browser}`);
}
checkBrowserVersion(log);