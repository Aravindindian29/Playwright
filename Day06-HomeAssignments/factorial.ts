
function factorial(n:number):number{

    let result=1;
    if(n<0){
        console.log(`The number ${n} is a negative number`);
    }
    else{

        for (let i = 2; i <=n ; i++) { 
            result=result*i;   
        }
        
    }
    return result;
}
console.log(factorial(-5));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(7));