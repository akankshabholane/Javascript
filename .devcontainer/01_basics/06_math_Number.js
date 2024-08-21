const score = 400 // here javascript automatically detected that the type of this scoree var is number 
const balance = new Number(100) //here iwe are explicitly saying that it is a number
console.log(balance.toString().length);
console.log(balance.toFixed(3));//3 decimal points

// const otherNumber = 23.892
// console.log(otherNumber.toPrecision(3))//returns string

// const otherNumber = 123.892
// console.log(otherNumber.toPrecision(3))//returns string


const otherNumber = 123.892
console.log(otherNumber.toPrecision(2))//2 values deta hai baki ki exponential main deta hun

const hunndreds = 1000000
console.log(hunndreds.toLocaleString("en-IN"));

// Number.MAX_VALUE
// Number.MIN_VALUE  (in browser console)
// Number.MAX_SAFE_INTEGER
