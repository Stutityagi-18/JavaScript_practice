const name="stuti"
const repocnt= 50

// console.log(name+repocnt);// stuti50 concatenate,outdated synteax
console.log( 'hello my name is $ {name} and my repo count is $ {repocnt}');//string interpolation,latest syntax

const gamename= new String('stuti')//it will give key value pairs like 0: "s",1:"t",2:"u",3:"t",4:"i"

console.log(gamename[0]);//s
console.log(gamename.__proto__);//{} empty object

console.log(gamename.length)//5

console.log(gamename.toUpperCase());//STUTI
console.log(gamename.toLowerCase());//stuti
console.log(gamename.charAt(2));//we pass numbers here like index number 
console.log(gamename.indexOf('t'));//1 it gives first occurence

const newstring=gamename.substring(0,4);
console.log(newstring);

const newstring2=gamename.slice(-4,2);//we can give negative indexing too
console.log(newstring2);

const newstring1="  stuti  "
console.log(newstring1.trim());//it removes spaces from starting and ending

const url="https://leetcode.com%20stuti"

url.replace('%20','-');//it replaces %20 with -
console.log(url.replace('%20','-'));

console.log(url.includes('stuti'));//true
console.log(url.includes('hello'));//false

console.log(url.split('com'));//it splits the string at com and gives array