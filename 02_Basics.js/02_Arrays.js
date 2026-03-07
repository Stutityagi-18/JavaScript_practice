const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);

marvel_heros.concat(dc_heros)
console.log(marvel_heros);
//concat return new array whereas push only change the existing array and return the length of the new array.
//or
const myhero =marvel_heros.concat(dc_heros);
console.log(myhero);

const al_new_heros=[...marvel_heros,...dc_heros]
console.log(al_new_heros);//spread operator is used to create a new array by spreading the elements of the existing arrays. It is a more concise and efficient way to combine arrays compared to concat.

const arr1=[1,2,3,4,5,6,7,[6,7,[4,5]]]

const myarr1 =arr1.flat(Infinity);
console.log(myarr1);

console.log(Array.isArray("Stuti"));
console.log(Array.from("Stuti"));


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));