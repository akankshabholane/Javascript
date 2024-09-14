// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){} //this is empty function

//to check if array is empty
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

//to detect if object is empty or not 
const emptyObj = {}

if(Object.keys(emptyObj).length=== 0){
    console.log("Object is empty");
    
}

//false == 0 o/p is "true"
//false == "" o/p is "true"
//0 == "" o/p is "true"

// Nullish Coalescing Operator (??): null undefined
let val1 
val1 = 5 ?? 16// o/p is 5
val1 = null ?? 13// o/p 13
val1 = 13 ?? undefined// o/p is 13
val1 = null ??5 ??13// o/p is 5
console.log(val1);


//ternary ooperator 
//condition ? true : false

const price = 1000
price > 1500 ? console.log("price greater than 500") : console.log("price smaller than 500");
;
