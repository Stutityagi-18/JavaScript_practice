//how to make declare object using constructor and make them singleton
const tuser=new Object()
 tuser.id="123"
 tuser.name="sammy"
// console.log(tuser);

const ruser={
    email: "sammy@gmail.com",
    fullname:{
        username:{
            fname:"shalu",
            lname: "kumari"
        }
    }
}
//console.log(ruser.fullname.username.fname);

const obj1={
    1: "a",2:"b"
}
const obj2={
    3: "c",4:"d"
}

//const obj3={obj1,obj2};
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } }

//const obj4=Object.assign({},obj1,obj2)
//console.log(obj4);
const obj3={...obj1,...obj2}
//console.log(obj3);

const user=[
    {
        id:1,
        email:"s@gmail.com",
    }
]
// console.log(Object.keys(tuser));
// console.log(Object.values(tuser));
// console.log(Object.entries(tuser));



//destructuring of object

const cc ={
    cname:"hindi",
    price:"100",
    cteacher:"shammi"
}
//cc.cteacher

const {cteacher: ct}=cc
//console.log(cteacher);
console.log(ct);

// const navbar= ({company}) =>{

// }
// navbar(company :"amazon")

// {
//     "name": "stuti",
//     "cname":"chai or js",
//     "price":"0"
// } 