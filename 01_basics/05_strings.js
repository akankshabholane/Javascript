//on browser console=> "hello"+ " world" => 'hello world'
//ways to declare string:
//const name = "Akanksha"
//const name = new String("akanksha")
const name = "Akanksha"
const percent = 95;

//console.log(name + " has " + percent +" percent"); // no one writes like this now

//we use string interpolation..we use placeholders here
console.log(`My name is ${name} and i have ${percent} percent in my 12th board`);

//const name = new String("akanksha") copy paste it in browser console and then in prototypes you will get a lot of methods related to string.. if you master these methods you can master string

const myName = new String("akanksha");
// console.log(myName[6]);// key value pair access

//to access prototype
// console.log(myName.__proto__);
// console.log(myName.length);
// console.log(myName.toUpperCase());// this has not changed the original string
// console.log(myName.charAt(3));
// console.log(myName.indexOf("k"));
// //go through all methods of stirng for interview

// const newString = myName.substring(0,3)// 3 is excluded. no negative values alowed, if give it will start from 0
// console.log(newString);

// const anotherString = myName.slice(3,9);//index end is optional
// console.log(anotherString);
// const anotherStringNEg = myName.slice(0,-1); //from 0 to second last;
// console.log(anotherStringNEg);

// const anotherStringNEg = myName.slice(-5,6); //from right 5th is starting(excluded) and from left 6th is the ending index(excluded);
// console.log(anotherStringNEg);

// const anotherStringNEg = myName.slice(4,-2); //from left 4th is starting and from right 2nd is the ending index;
// console.log(anotherStringNEg);

const spaceName ="  Akanksha  " 
console.log(spaceName);
console.log(spaceName.trim());//trims starting and ending spaces and also works on line terminators

//browers doesnt understand spaces therefore if there is a space in website then browser will automatically convert in %20 that is urlencoding main
const url = "https://akanksha%20Bholane"
console.log(url.replace("%20", "-"));
console.log(url.includes("kan"));

const valueariable = "akanksha somnath anushka sarika"
console.log(valueariable.split(" "));





