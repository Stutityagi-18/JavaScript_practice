const myArr=[0,1,2,3,4,"stuti"]
const myHeros=["stuti","tyagi"]
// console.log(myArr[0])//0

//Array Methods
myArr.push(7);
myArr.push(9);
// console.log(myArr);
myArr.pop();


// console.log(myArr.includes(4));//true
// console.log(myArr.indexOf("stuti"));//5

const newArr=myArr.join();//join changed the data type to string 
// console.log(typeof newArr);

//slice,splice

console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log("B",myn1);

const myn2=myArr.splice(1,3);
console.log(myn1);
console.log(myn2);
