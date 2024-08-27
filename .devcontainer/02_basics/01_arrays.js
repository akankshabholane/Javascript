//array
//=>Array in a non-primitive data types.=>ann object 
//=>It is used to store nultiple items under a single varible. 
//=>JavaScript arrays are resizable and can contain a mix of different data types.
//=>JavaScript array-copy operations create shallow copies.
//shallow copy =>A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. 


// const myArray = [0,1,2,3,4,5,true, "Akanksha"]//can have diff ele
// // const number = [1,2,3,4,5,6] then numer in browser concole you will get a prototype and in it we'll get one more prototype


// //array methods
// myArray.push(10000)
// // console.log(myArray);

// const arrayy = new Array(1,2,3,4,5,6,7,8,9,10)
// // arrayy.pop()
// //arrayy.unshift(1111)//adds element in the start of the array
// arrayy.shift()//removes first value of an array.
// console.log(arrayy.includes(11));//returns true or false
// console.log(arrayy.indexOf(11111111111111111));// checks the position of value in number form.returns -1 if element not present

// const newArray = arrayy.join()//Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(arrayy);
// console.log(newArray);//typeOf is string
// console.log(typeof newArray);


//slice splice
 const mainArray= new Array(1,2,3,4,5)

console.log("A", mainArray);
const newarrayy = mainArray.slice(0,3);
console.log(newarrayy);

console.log("B", mainArray);
const newarr = mainArray.splice(0,3)
console.log(newarr);

console.log("c", mainArray);
console.log(newarr);

//slice :- The slice() method in JavaScript extracts a section of an array and returns a new array containing the selected elements, without modifying the original array.The return value is a new array with the values in the selected sub-array of the given array

//splice :- The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place, modifying the original array.The return value is an array containing the deleted element.


