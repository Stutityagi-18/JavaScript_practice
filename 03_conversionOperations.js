let score="33abc";
console.log(typeof score);//number
console.log(typeof (score));
let valueinNumber=Number(score);
console.log(typeof valueinNumber);
console.log(valueinNumber)//so if we have score="33abc"then it will give NaN(Not a Number) otherwise if we have score="33" then it will give 33 as number
//true=`1;false=0;
let isloggedin=1

let booleanisloggedin=Boolean(isloggedin);
console.log(booleanisloggedin);//true
//1==true
//0==false

//""==false
//"stuti"==true
let somenumber=33

let stringnumber=String(somenumber);
console.log(stringnumber);
console.log(typeof stringnumber);