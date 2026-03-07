//we can declare object as literals as well as constructor
//when we use literal then there is  no singleton
//object.create  constructor k through


const mysym =Symbol("key1")//symbol

//now if we wanna symbol ko as a key use krna hai of obj then


const juser={
    name: "Stuti",
    age:19,
    [mysym] : "key1",//square bracket is used to access the symbol key in the object
    location:"jaipur",
    email:"stuti@gmail.com"
}//literal   declering obj


//how to access
console.log(juser.email)

console.log(juser["email"])
console.log(typeof juser[mysym])//yeh hme string type dega so for symbol we will use
console.log(juser[mysym])


juser.email="sttuti@gmail.com"

//Object.freeze(juser)//now it will prevent us from changing this property of the object
//console.log(juser);


juser.greeting=function(){
    console.log("hello");
}
juser.greeting2 = function(){
    console.log(`hello user , ${this.name}`);
}

console.log(juser.greeting());
console.log(juser.greeting2());
