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
//non primitive have object type like object function
 
const heros =["shaktiman","naagraj","doga"]//object
let myObj ={//object
    name:"hitesh",
    age:19

}


const myfunc =function(){
    console.log("hello world");
}
//reference type 
console.log(typeof bigNumber);//bigint
console.log(typeof myObj);//object
console.log(typeof heros);//object
console.log(typeof myfunc);//function
console.log(typeof null);//object but it is a bug in js it should be null
console.log(typeof outsidetemp);//undefined
console.log(typeof isloggedIn);//boolean
console.log(typeof  id);//symbol