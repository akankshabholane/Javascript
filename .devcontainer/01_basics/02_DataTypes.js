const accoundId = 123456;
let fName = "Akanksha";
var accoundNumber = 12345;
let state;//gives o/p undefined

City = "Pune"// we can declare variable like this also but this is not a good practice
//accoundId = 2//cant happen,not allowed
fName = "Anushka";
accoundNumber = 9876
console.log(accoundId);
console.log(fName);
console.log(accoundNumber);


/*
prefer not to use var because of block and functional scope
*/
console.table([fName, accoundNumber, City,state])





"use strict";//treat all js code as the newwer version..no need to write as automatically nowadays js is of newer version only..but good practice to write
//alert("Akanksha");// this cant be done in nodejs.. we have a different syntax in node to do this
console.log( 3 + 
    3)// can be done but we need code readability

//tc39.es is the official documentation of java script..
//different browser had different JS standard earlier. then everyone came together and formed a ecma organisation which writes standards and not JS
//DATATYPES

//NUMBER=> 2 TO THE POWER 53
//BIGINT
//BOOLEAN=> TRUE/ FALSE
//STRING=> ""
//NULL=> STANDALONE VALUE. REPRESENTATION OF EMPTY VALUE
//UNDEFINED=> NO VALUE ASSIGNED
//SYMBOL => TO FIND UNIQUENESS

//OBJECT

let age = 21;
console.log(typeof age);
console.log(typeof (null));//null is an object (INTERIEW QUESTION)
console.log(typeof undefined);// undefined is of type undefined 


