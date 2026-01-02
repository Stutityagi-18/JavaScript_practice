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
// console.log(stringnumber);
// console.log(typeof stringnumber); 

// ********operations****
let value=3
let negvalue=-value;
console.log(negvalue);

let str1="stuti"
let str2="tyagi"
let str3=str1+str2;
console.log(str3)

// console.log(1+"2") output will be 12 this is a problem we are adding number with a string
// console.log("1"+2+2)  output will be 122,if string comes first then all the other will be treated as string
 console.log(1+2+"3")//output will be 33
 console.log(+true)//output will be 1 but it is not good practice
 
 let num1,num2,num3;
 num1=num2=num3=2+2//not a good practice
 let gamecounter=100;
 gamecounter++;
 console.log(gamecounter);//output will be 101
 