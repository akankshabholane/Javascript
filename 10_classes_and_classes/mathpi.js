const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); right now this value is not able to edit but it can be done 


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); //output---->{
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
//}

Object.defineProperty(chai, "name",{
    writable: false,
  enumerable: false
})              //what it is? where can be used? and where it cant?

console.log(Object.getOwnPropertyDescriptor(chai, "name"));