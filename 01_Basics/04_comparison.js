console.log(2>1)//output will be in boolean
console.log(2<1)//output will be false

console.log("2">1);
console.log(null>=0)//true
console.log(null>0)//false
console.log(null==0)//false
//why == and <,>,>=,<= work differently? 
// comparisonn convert null to a number,treating it as 0.that's why (3)null>=0 is true and (1)null>0 is false.


console.loh(undefined==0)//false,it will be false with ==,<,>,<=,>=
console.log(undefined>0)//false

//===strict equality operator
console.log(1==="1")//false because === strictly checks it checks data type too
//we should these type of conversions
