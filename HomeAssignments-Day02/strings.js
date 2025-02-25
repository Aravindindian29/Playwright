
let input=`madam`;
let result;
function palindrome(input) {
let val=input.toLowerCase().split("");
// console.log(val);
// console.log(val.length);
let reverse="";
for(let i=val.length-1; i>=0; i--){
    reverse+=val[i]; 
    }
    // console.log(`${reverse}`);  
    if(reverse===input){
    console.log(`The given string "${input}" is a palindrome`) ;
    result= true;
    }
    else{
    console.log(`The given string "${input}" is not a palindrome`) ;
    result = false;
    }
    return result;
    }
    
    
let output = palindrome(input);
console.log(output);
