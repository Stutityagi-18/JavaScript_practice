const user={
    uname:"stuti",
    price: 99,
    welcomemsg: function() {
        console.log(`${this.uname}`, "welcome to website");
        // console.log(this);
    }
}
// user.welcomemsg()
// user.uname="sam"
// console.log(user.uname)


// function chai(){
//     let uname="stuti"
//     console.log(this.uname);
// }
// chai()//undefined

// const chai=function(){
//     let uname="stuti"
//      console.log(this.uname);
// }
// chai()

//arrow function
const chai=() =>{
    let uname="stuti"
     console.log(this.uname);
}
chai()

// const addtwo=(num1,num2) => {
//     return num1+num2
//if we are using curly braces then we have to use return keyword
// }
// console.log(addtwo(10,20))

//implicit return 
const addtwo=(num1,num2) => num1+num2
console.log(addtwo(10,20))
