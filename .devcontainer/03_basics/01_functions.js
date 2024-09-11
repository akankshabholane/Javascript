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

function calculateCcartPrice(...num1){
    console.log(num1);
    
}
calculateCcartPrice(3,4,5,6)//when we pass many arguments we use rest operator i.e.  ...num1 to tell that it can take multiple arguments
function calculateCartPrice(val1, val2, ...num1){//inerview
    return num1
}

console.log(calculateCartPrice(200,300,4000,5000,9000))

//passing object to the function
const user = {
    username: "Anushka",
    price: 299
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
//if we do price instead of prices in ${anyobject.price} then it will show undefined
const users = {
    username: "Anushka",
    prices: 299
}
function handleObjects(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObjects(users)
handleObject({
    username: "Hari",
    price: 5999
})//we can also pass direct object


//array
const arr= [123,234,345]
function retrunArray (getArray){
    return getArray[1]
}
//console.log(retrunArray(arr));
console.log(retrunArray([1234,2345,3456,4567,5678]));

