const accountId = 144553
let accountemail = "tyagi.com"
var accpass = "12345"
accCity = "Jaipur"
//accountId=1234 not allowed
accountemail="stuti.com"
accpass = "89389"
accCity = "Delhi"

console.log(accountId);
console.table([accountId,accountemail,accpass,accCity])
/*
var has a problem of block and functional scope
whereas let doesn't have any such problem
so we will use let

if we only declare variable without initializing the value then it will be shown as undefined in javascript
*/

//task 1
var x=17;
console.log(x);

//task 2
let num=4;
let str="hello";
let b2=false;
const college={
    Name:"Banasthali Vidhyapith",branch:"CS",year:3

};
const fruits=["apple","lichi","kiwi"];
console.log(typeof num);
console.log(typeof str);
console.log(typeof b2);
console.log(typeof college);
console.log(typeof fruits);

