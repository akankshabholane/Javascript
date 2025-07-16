function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //SetUsername(this, username)// when we run this line we think that the funtion is xalled.. it is ccalled but the thing is that  this fn is executed and all its data and the fn is removed from the stacck during stack unwinding therefore to hold the values that it has we use .call it holds the reference..this will make a call but object main abhi bhi reflect nhi hoga or you can say ki dikhega nahi

    SetUsername.call(this, username) // here this is written bcoz it indicates that this mera wala use kro tumhara nahi now the username is set in the object and is reflected here
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

//explain everthing in here if asked about call in INTERVIEW 