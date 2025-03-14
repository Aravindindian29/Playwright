const num = [2,4,5,2,1,2];
let count=0;
const k=2;

for (let i = 0; i < num.length; i++) {
        if(num[i]===k){
            count++;
        }
    }
console.log(count);
