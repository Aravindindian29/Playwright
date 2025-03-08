let conditionalPromise = new Promise ((resolve,reject)=>{

    let randomNumber =Math.random();
    console.log(`The random number is : ${randomNumber}`);
    
    if(randomNumber>0.5){
        resolve(`Resolved successfully`);
    }else{
        reject(`Rejected`);
    }
})

conditionalPromise
.then(message=>{
    console.log(message);
})

.catch(error=>{
    console.log(error);    
})

