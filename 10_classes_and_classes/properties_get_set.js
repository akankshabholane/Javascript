//syntax of properties k through kaise getter aur setter set hote the

function User(email, password){
    this._email = email
    this._password = password
//pehele getter aur setter kaise milte the? bcoz abhi get set method hai bcoz classes availabe hai .. toh iss case main obhect allow krta hai khud he as fubctiob is also object and function , so u can call the function's property of object. defineproperty ye property getter aur setter ki hai 
    Object.defineProperty(this, 'email' , {
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email = value
        }
    })       //isk pass khudka this nahi hota hai as uska this is empty or global objec ko reference kara hai

    Object.defineProperty(this, 'password' , {
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this._password = value
        }
    })
}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);
// here the setters are called by object but for a funciotn this can be done for object as well