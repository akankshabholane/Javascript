const score = 400 // here javascript automatically detected that the type of this scoree var is number 
const balance = new Number(100) //here iwe are explicitly saying that it is a number
// console.log(balance.toString().length);
// console.log(balance.toFixed(3));//3 decimal points

// const otherNumber = 23.892
// console.log(otherNumber.toPrecision(3))//returns string

// const otherNumber = 123.892
// console.log(otherNumber.toPrecision(3))//returns string


const otherNumber = 123.892
// console.log(otherNumber.toPrecision(2))//2 values deta hai baki ki exponential main deta hun

const hunndreds = 1000000
// console.log(hunndreds.toLocaleString("en-IN"));

// Number.MAX_VALUE
// Number.MIN_VALUE  (in browser console)
// Number.MAX_SAFE_INTEGER


//----------------------------MATHS----------------------------------------------
// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.5));//5
// console.log(Math.round(4.6));//5
// console.log(Math.round(4.4));//4.........to control value upper vali choose hogi ya lower vali we have:-
// console.log(Math.ceil(4.5));//5...if 4 has even .1 it will print 5
// console.log(Math.floor(4.9));//4....even if 4.9 it will give 4
// console.log(Math.min(4,5,1,0,-1));
// console.log(Math.max(4,2,13,100,5));



// console.log(Math.random());//always give values between 0 n 1
// console.log((Math.random() *10)+ 1);//from above statement we can say that if the num is 0.01234 something then even if we *10 it will only move one decimal to right which means the ans will be 0.1234 therefore to avoid this we add 1 in it
// console.log(Math.floor(Math.random() *10)+ 1);

//trick
const min= 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));



