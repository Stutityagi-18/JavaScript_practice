// const coding=["javascript","python","java","c++"]
// const values=coding.forEach( (item) =>{
//     return item
// })
// console.log(values);
// //output:undefined bcz forEach me return ka koi use nhi hota hai

// const nums=[1,2,3,4,5,6,7,8,9]
// // mynums.filter( (num)=> {
// //     num>4
// // } )

// const newnums=[ ]
// nums.forEach( (num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })
// console.log(newnums);
//output:[5,6,7,8,9] bcz filter me return ka use hota hai and filter ek new array return karta hai jisme wo sare element hote hai jo condition ko satisfy karte hai


// const nums=[1,2,3,4,5,6,7,8,9,10]

// // const newnums=nums.map( (num) => num+10 )
// // console.log(newnums);

// //chaining
// const newnums=nums.map( (num) => num*10).map( (num) => num+1).filter( (num) => num>=40)
// console.log(newnums)

//reduce method
  const arr=[1,2,3,4,5]
  const ttlsum=arr.reduce( (accumulator,currentval) => accumulator+currentval,initialValue=0);
  console.log(ttlsum);