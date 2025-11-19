// stack is used in primitive data types
//heap is ued for non primitive data types

let myutubename="stutityagi"//primitive data type let


let anothername=myutubename

anothername="codes";

console.log(anothername);//in these we were getting copies

let user ={
    email:"tyagi@gmail.com",
    upi :"1233"
}

let anotheruser=user;

anotheruser.email="stuti@gmail.com"

console.log(user.email);//same value will be there for both,here they are referenig to same
console.log(anotheruser.email);