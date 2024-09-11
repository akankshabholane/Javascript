//IIFE IMMEDIATELY INVOCKED FUNCTION EXPRESSION:- jo function immediately execute hojae, global scope k pollution se problem hoti hai kai baar toh woh global scope k jo ariables hai uska pollution hatane k liye humne iife use kiya hai
// function chai(){
//     console.log("DB CONNECTED");
// }
// chai()
//this can be written as:-
(function chai(){
    //name iife
    console.log("DB CONNECTED");
})();//()() in first bracket we write funciton and the second one is for execution

// (function chaiaurcode(){
//     console.log("DB CONNECTED TWO");//gives error as iife ko pata nahi hai context kaha rokna hai tehrefore we have to give semicolon after calling it
// })(); //HERE SEMIOLON IS GIVEN EXPLICITYY AND INTENTIONALLY
//WE CAN ALSO WRITE ARROW FUNCTION
(() =>{
    console.log("DB CONNECTED TWO");
})();

((name) =>{
    //unnamed iife with paramettrs passed
    console.log(`DB CONNECTED TWO , ${name}`);
})("Anu")
