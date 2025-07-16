//Object literal


const user ={
    username:"Akanksha",
    logInCount : 6,
    signedIn : true,

    getUserDetails: function(){
        //console.log("Got user details");
        console.log(`Username: ${this.username}` );
        console.log(this); // the console.log here has "this".. it shows the current context to which "this" is 
        //output of above line is:
        
                    // {
                    //     username: 'Akanksha',
                    //     logInCount: 6,
                    //     signedIn: true,
                    //     getUserDetails: [Function: getUserDetails]
                    // }

    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);// output of this is {} means abhi global contxt main kuch nahi hai... when you go console.log(this) on browsesr console you will ssee a window object there as output that means browser main current contct main bahot sari chize hai but node main nahi hai 


//when we talk abt current context we use thi.. eg monday toh monday hota hai.. every week aata hai. but aap konse week k monday ko refer kre ho ? iss monday ya agle monday toh waha pr hum this keyword use krte hai...when you talk about this it tells us about the current context

// const promiseOne = new Promise()
// const date = new Date() // this new keyword is actually a contructor function woh allow krta hai ek he obj litral se multiple instances bana pau. new keyword naya context banane k kam aata hai.

function Users(username, loginCount, isLoggedIn){
    //we have tto set these values in variable
    //username = username //here which one is  parameter and which one is a varaiable? to know that we add this
    this.username = username; // left hand side value is a variable and right hand side is a parameter
    this.loginCount = loginCount;
    this.isLoggedIn =isLoggedIn;

    this.greeting = function(){ 
        console.log(`Welcome ${this.username}`)
    } // methods can also be written

    return this;// woh jo object tha usko pass on kiya.. return likhe ya na likhe farak nahi padta as it is implicitly defined.. by default waha hoga he
    
}

// const userOne = Users("Akanksha", 8, true);
// const userTwo = Users("Anushka", 3, false);
// console.log(userOne);// even when we havvent console.loged usertwo we are geting out put of user two as the value of userone have been overridden here as evertime the same copy is getting modified. to avoid so we have to write new keyword as it will form new instance for each and thus values are not overridden

const userOne = new Users("Akanksha", 8, true);
const userTwo = new Users("Anushka", 3, false);
//console.log(userOne);
console.log(userOne.constructor);// constructor property here is?
//console.log(userTwo);
// constructor function hamesha naya instance deta hai

//new--
// whenever you use a new keyword ek empty oject called instance is created(this is step 1)
// contructor function ccall hota hai new keyword k karan ..constructor function packs all the arguments hai woh usmein pack krta hai aur apko de deta hai( step2)
// this keyword injects the argument in the variable(step 3)
// argumetns function k andar mil jate hai (step 4)

//instanceof in js
//In JavaScript, the instanceof operator is used to check if an object is an instance of a specific class or constructor function. It returns a boolean value (true or false). 

