const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); right now this value is not able to edit but it can be done 


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai : function(){
      console.log("chai nahi bani");
      
    }
    
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); //output---->{
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
//}

// Object.defineProperty(chai, "name",{
//     writable: false,
//   enumerable: false
// })              //what it is? where can be used? and where it cant?

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of chai) {
// console.log(`${key} :${value}`); // why this doesnt work?  The for...of loop is designed to iterate over iterable objects (like Arrays, Strings, Maps, Sets, etc.). A plain JavaScript object like chai is not iterable by default. When you try to use for...of directly on chai, JavaScript throws a TypeError because chai is not an iterable object.How to fix it:You can iterate over the object's keys, values, or key-value pairs using Object.keys(), Object.values(), or Object.entries() respectively.
// }

// for(let [key,value] of Object.entries(chai)){
//   console.log(`${key}:${value}`);
  
// } // output{                   //this is the output without any funciton in the object
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
// name:ginger chai
// price:250
// isAvailable:true


//after there is a function in the object what is the output see for yourself

for(let [key,value] of Object.entries(chai)){
  console.log(`${key}:${value}`);
  
}//output 
// name:ginger chai
// price:250
// isAvailable:true
// orderChai:function(){
//       console.log("chai nahi bani");
      
//     }  -> this is the problem we have .. it can be removed by the if condition in the below for loop

for(let [key,value] of Object.entries(chai)){
  if(typeof value !== 'function') {
    console.log(`${key}:${value}`);
  }
}
