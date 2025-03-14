function fibonacci(n:number):number{
let result=0;

if(n<0){
    console.log(`The number ${n} is a negative number`);
}
else{

    for (let i = 0; i <=n; i++) {
        result=result+i;
    }
}
return result;
}
console.log(fibonacci(-2));
console.log(fibonacci(3));
