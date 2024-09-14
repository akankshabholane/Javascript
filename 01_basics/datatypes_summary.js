//classification of datatype based on how the are stored in the memory and how it is accessed;- primitive and non preimitive

// primitive(are call by value. ek copy banti hai aur us copy main changes hote hai ):- 7 
//string, number, boolean, null, undefined, symbol, bigint


//non primitive(reference):-
//array object function

//master object and web events/ browser event
//JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly
const id = Symbol("123");
const accId = Symbol("123");
//symbol returns symbol only..even above both value are same thy are not same...used to add unique property keys to an object.. built-in object 
console.log(id === accId);//returns false
const bigNUmber = 123456789876543212345678765432n// n lagado last main to bigint main convert hojata hai

//array
const heros = ["spiderman", "wonderwoman", "ironman"]
//object
let obj = {
    name : "Akanksha",
    age : 21
}
//function
//different types are availabe but here we are treating function as variable
const myFunc = function(){
    console.log("Hello World");
}

// how to know datatype: typeof
// Undefined=>	"undefined"
// Null=>	"object"
// Boolean=>	"boolean"
// Number	=>"number"
// String=>	"string"
// Object (native and does not implement [[Call]])  =>	"object"
// Object (native or host and does implement [[Call]])	=>  "function"
// Object (host and does not implement [[Call]]) =>	Implementation-defined except may not be "undefined", "boolean", "number", or "string".

console.log(typeof myFunc);// type is function only but it is called as object function..

//all non primitive  datatype type is object only



//===========================================================================================
//  2 types of memory :
//  stack (primmitive datatypes are in stack, we get copy of that variable), heap(non primitive datatypes are in heap, here we get reference of the variable any change will be done in original vavlue not in copy)

let youtubeName = "AkannkshaYTChannel";

console.log(youtubeName);
let anotherYoutubeName = youtubeName;
console.log(anotherYoutubeName);
anotherYoutubeName = "AnushkasYTChannel"
console.log(anotherYoutubeName);
// here copy is made and there change is done so youtubeName will be akanksha only
console.log(youtubeName);


let userOne = {
    name:"Akanksha",
    email:"asdfghj@gmail.com"
}
console.log(userOne.email);

let userTwo = userOne;
console.log(userTwo.email);
userTwo.email = "akanksha@gmail.com"
console.log(userOne.email); 





