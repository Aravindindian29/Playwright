// Example 1:
let s= "Hello World";
let a=s.split(" ");
console.log(a);
let split=`${a.slice(-1)}`
console.log(`The last word "${split}" with length ${split.length}.`);

// Example 2:
s = " fly me to the moon ";
split = s.trim().split(" ");
console.log(split);
split=`${split.slice(-1)}`
console.log(`The last word "${split}" with length ${split.length}.`);

//Example 3:

let result;
function anagram(str1, str2){
input1 = str1.toLowerCase().trim().split("").sort();
input2 = str2.toLowerCase().trim().split("").sort();
console.log(input1);
console.log(input2);
str1Inp=input1.toString();
str2Inp=input2.toString();
console.log(str1Inp);
console.log(str2Inp);

if(str1Inp===str2Inp){
    result = true;
}
else{
result = false;
}
return result;
}
let output = anagram('listen','silent')
console.log(output);