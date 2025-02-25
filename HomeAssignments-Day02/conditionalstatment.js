function launchBrowser(browserName){
    if(browserName===`chrome`){
        console.log(`launched the ${browserName} browser`);
    }
    else if(browserName!==`chrome`){
        console.log(`launched the default browser`);
    }
}

function runInThisContext(testType){
switch (testType){
case'smoke':
console.log(`Running the ${testType} test`);
break;
case'sanity':
console.log(`Running the ${testType} test`);
break;
case'regression':
console.log(`Running the ${testType} test`);
break;
default:
console.log(`Running the default smoke test`);
break;
}
}
launchBrowser(`firfox`);
runInThisContext(`UAT`);