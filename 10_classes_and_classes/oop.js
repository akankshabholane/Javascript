//Object literal


const user ={
    username:"Akanksha",
    logInCount : 6,
    signedIn : true,

    getUserDetails: function(){
        console.log("Got user details");
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());

//when we talk abt current context we use thi.. eg monday toh monday hota hai.. every week aata hai. but aap konse week k monday ko refer kre ho ? iss monday ya agle monday toh waha pr hum this keyword use krte hai
