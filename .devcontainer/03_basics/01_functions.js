// console.log("A");
// console.log("N");
// console.log("U");
// console.log("S");
// console.log("H");
// console.log("K");
// console.log("A");

function sayMyname(){
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("K");
    console.log("A");

}
//sayMyname()

function addTwo(num1, num2){//parameters:- when we define a function and take some inputs in it we call them parameters
    console.log(num1 + num2);
}
addTwo(1,2)//function calling mai jo input dete hai unko arguments kahete hai
addTwo(1,"2")//12
addTwo(1,"a")//1a
addTwo(1,null)//1

//const result = addTwo(5,5)
//console.log("Result:" , result);//it gives undefined. we assume that consle log kiya matla b return hua but return and console log are different things

function addTwoNum(num1, num2){
    // let result = num1 + num2
    // return result
    return num1+num2
}
const result = addTwoNum(19,1)
console.log("Result",result);

// function loginuserMessage(username){
//     return `${username} just logged in`
// }

//console.log(loginuserMessage(""));
//console.log(loginuserMessage());if no value passed then undefined
function loginuserMessage(username = "God"){
    return `${username} just logged in`
}
loginuserMessage("Anushka")
console.log(loginuserMessage("Akanksha"));

console.log(loginuserMessage());//if no value given then god which is default that will be displayed
