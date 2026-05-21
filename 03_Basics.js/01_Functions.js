
function myname(){
console.log("S");
console.log("T");
console.log("U");
console.log("T");
console.log("I");

}

//myname()

// function addnum(num1,num2)
// {
//     console.log(num1+num2);
// }
function addnum(num1,num2)
{
    let res=num1+num2;
    return res;
}
addnum(10,20);//30
let var1= addnum(10,20);//30
//console.log(var1);//30

function loginuser(uname)
{
    if(uname===undefined)
    {
        console.log("enter username");
        return;
    }
    return `${uname} just logged in`
}
// console.log(loginuser("stuti"))
//console.log(loginuser())//undefined just logged in  if we dont give if statement

function calprice(...num1)//here ... are rest operator
{
    return num1
}
console.log(calprice(200,400,600))//[ 200, 400, 600 ] because of rest operatorotherwise 200
