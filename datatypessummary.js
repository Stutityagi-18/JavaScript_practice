//data types ->primitive and non-primitive
//primitive -> around 7 categories(call by value means changes in their copy)
//string,number,bnoolean,null,undefined,symbol(if we wanna make unique then we wrap it up in symbol),BigInt
const score=100;
const scoreval=100.3


const isloggedIn=false
const outsidetemp=null
let useremail=undefined

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);//false
//we feel these both are same but they are nit because symbol is unique

const bigNumber=6767676676554535456n



//non-primitive ->(reference type means changes in original also)
//array,Objects,functions
 
const heros =["shaktiman","naagraj","doga"]//array
let myObj ={//object
    name:"hitesh",
    age:19

}


const myfunc =function(){
    console.log("hello world");
}
//reference type 
console.log(typeof bigNumber);
console.log(typeof myObj);
console.log(typeof heros);
console.log(typeof myfunc);