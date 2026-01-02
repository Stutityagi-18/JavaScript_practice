//number
// const score=400//its data type should be number
// console.log(score);//400 


const bal=new Number(100)
// console.log(bal);//[Number: 100]

// console.log(bal.toString().length);//100 it converts number to string
// console.log(typeof bal)

// console.log(bal.toFixed(3))//100.000 it adds 3 decimal places

const othernum  =23.456

// console.log(othernum.toPrecision(3));//23.5 it rounds the number to 3 significant digits,priority to digits before decimal

const num1=1000000

// console.log(num1.toLocaleString());//1,000,000 it adds commas according to locale 

// console.log(num1.toLocaleString('en-IN'));//10,00,000 it adds commas according to indian STANDARDS


//maths
console.log(Math);
console.log(Math.abs(-4));//4 it gives absolute value
console.log(Math.round(4.8));//5 it rounds to nearest integer
console.log(Math.ceil(4.2));//5 it rounds up to nearest integer
console.log(Math.floor(4.9));//4 it rounds down to 4
console.log(Math.min(0,150,30,20,-8,-200));//-200 it gives minimum value
console.log(Math.random());//it gives random number between 0 and 1
console.log(Math.floor(Math.random()*10));//it gives random number between 0 and 9
console.log((Math.random()*10)+1);//it gives random number between 1 and 10


const min=10;
const max=20
console.log(Math.random()*(max-min)+1)//it gives random number between 10 and 20
