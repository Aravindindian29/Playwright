function numberType(number){   
  let result;   
if(number>0){

    result=`${number}`+ ' is positive number';
}
else if(number<0){
    result= `${number}` + ' is negative number';
}
else if(number===0){
    result= `${number}`+ ' is neutral number';
}
return  result;
} 
let numbertype =numberType(0);
console.log(numbertype);