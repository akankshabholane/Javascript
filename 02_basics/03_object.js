//singleton ...when we make a object through constructor it becomes singleton
Object.create //object created through constructor

//object literals

const jsUser = {
    name : "akanksha",// default name is processed as "name" in the system but we dont write it that way
    lastLogin : ['Monday', 'tuesday']
}//object created through literals

console.log(jsUser.name);
console.log(jsUser["name"]);//if the object is in the form "name": "Akanksha" u cant access it inthe form of --console.log(jsUser.name);

//INTERVIEW;- SYMBOL LO OBJECT KI KEYS MAIN DALK PRINT KRO
const mySym = Symbol("mykey1")

const User = {
    name : "Anushka",
    Lname : "Bholane",
    mySym : "mykey1"
}
console.log(User.mySym);
console.log(typeof User.mySym);//string not symbol 

const Users = {
    name : "Anushka",
    Lname : "Bholane",
    [mySym] : "mykey1"
}
console.log(Users[mySym]);

jsUser.name = "Hari"
console.log(jsUser.name);
//Object.freeze(jsUser)//freezes the object so no one can change the object
jsUser.name = "Sanika"
console.log(jsUser.name);
console.log(jsUser);
console.log(User);
console.log(Users);


jsUser.greeting = function(){
    console.log("Hello js user")
}

console.log(jsUser.greeting);//[Function (anonymous)] i.e function return back..function ka reference aaya haifunction execute nhi hua hai 
//console.log(jsUser.greeting());//not a function

jsUser.greetingtwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greetingtwo());

 