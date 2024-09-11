const user = {
    username:"akanksha",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welome to the website`);
        //console.log(this);//this current context or current values ki baremein baat krta hai
        
        
    }
}

user.welcomeMessage()
user.username = "Anu"
user.welcomeMessage()
//console.log(this);// output is {} that is empty..node environment main this refers to empty object bcoz abhi global main kuch context henahi hai
//console.log(this);// in browser it will be different i.e window as window is the global object in brower


//function k andar this value
// function chai (){
//     console.log(this);
// }
// chai()

// function chai (){
//     let username= "Hitesh"
//     console.log(this);
// }
// chai()

// function chai (){
//     let username= "Hitesh"
//     console.log(this.username);//here it gives undefined..this cant be used in function
// }
// chai()

// const abc = function chai (){
//     let username= "Hitesh"
//     console.log(this.username);//here it gives undefined..this cant be used in function
// }
// abc()

// const chai =  ()=>{
//     let username= "Hitesh"
//     console.log(this.username);
// }
// chai()

const chai =  ()=>{
    let username= "Hitesh"
    console.log(this);
}
chai() // output is {}

//INTERVIEW: - DIFFERENCE BEGTWEEN ARRAW FUNCTION AND NORMAL FUNCTION

//ARROW FUNCITON:-

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return:-
// const addtwo = (num1, num2) => num1 + num2
const addtwo = (num1, num2) => (num1 + num2)//{} ismein wrap kiya toh reutrn likhna padega ..() ismein likha toh return nahi likhna padega

console.log(addtwo(1,2));

//to return object
const obj = () => ({user: "Anu"})
console.log(obj());





