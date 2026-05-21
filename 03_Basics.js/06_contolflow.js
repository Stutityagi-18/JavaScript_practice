// if (condition) {
//     //code to be executed
// }
// else{
//     //code to be executed
// }
//falsy value
//false,0,-0,null,undefined,NaN,BigInt 0n,"",``

//true value "0",'false," ",[],{},function(){}
//nullish coalescing operator(??):null undefined
// let val1
//val1=5??10
// val1=null??10
// console.log(val1)

//for loop
// console.log("for loop")
// for(let i=0;i<5;i++){
//     console.log(i);
// }

// console.log("while loop")

// let j=10;
// while(j>0){
//     console.log(j)
//     j--
// }

// console.log(" do while loop")

// let k=0
// do{
//     console.log(k);
//     k++;
// }while(k<10)

//for of loop
// const arr=[1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
// }
// const greet="hello world"
// for(const gre of greet)
// {
//     console.log(`each char is ${gre}`);
// }
//maps
// const map=new Map()
// map.set('IN',"India") 
// map.set('UK',"United Kingdom") 
// map.set('FR',"France") 
// console.log(map)
// for(const [key, value] of map){
//     console.log(key, ':-',value);
// }


//this wont work in objects
// const myobj={
//     'gamme1':'pubg',
//     'game2':'templerun'
// }
// for(const [key,value] of myobj){
//     console.log(key,':-',value)
// }

// const myobj={
//     js:'javascript',
//     cpp:'c++',
//     java:'java'
// }

// for (const key in myobj){
//     console.log(`${key} shortcut is for ${myobj[key]}`);
// }
// const arr=[1,2,3,4,5]
// for(const key in arr){
//     console.log(key);
// }

//map pr for in loop nhi execute hota bcz map is not iteartable


const coding=["javascript","python","java","c++"]
// coding.forEach( function (item){
//     console.log(item);
// })
//output:javascript
//       python
//       java
//       c++

//by arrow function
// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item,index,arr){
//     console.log(item,index,arr);
// }
// coding.forEach(printMe)

const mycod9ing=[
    {
        languagename:"js",
        langfile:"js"
    },
    {
        languagename:"cp",
        langfile:"c++"
    },
    {
        languagename:"c",
        langfile:"c"
    },

]


mycod9ing.forEach( (item)=>{
    console.log(item.langfile);
})
