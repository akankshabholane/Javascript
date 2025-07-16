function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype); //.prototype se by default kuch context set hote hai. toh by default jo context hai prototype ka us method ka this hai... means .prototype hota hai wih sirf methods nahi usk sath sath kuch internal properties bhi deta hai.. toh is function(multiplyby5) ki bhi kuch property hogi. multipleby5 is funtion main humne this nhi likha hai but agar hoti toh waha pr reference toh lete yaha pe toh us case k liye yaha pe bhi uski value hoti hai. toh {} is mien woh refernce store hai... {} this is th eoutput of this line

function createUser(username, score){
    this.username = username
    this.score = score
}

//injecting some functioanlity in a function
createUser.prototype.increment = function(){
    this.score++;
}// yaha prototype k through increment injecct kiya hai yaha leki problem ye hai ki score main kis ka badhau as dono same he function use kre hai. toh kis ne call kiya hai ye jane k lliye context lagega ki kisne bulaya toh ink pass abhi context hai he nahi toh ye contxt samjhane k liye jisne bhi bulaya hai usk pass jao matlab this.. therefore add this before score.

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
    
}
//this function createUser can have different users as followa
const chai = new createUser("chai", 25);
const tea = createUser("Tea",250);

chai.printMe(); 

// whenyou run here it says  Cannot read properties of undefined (reading 'printMe').. jabh apne function se chai main values transfer kari tabh apne bataya nahi ki mere pass ye addition properties ayi hai ye batana padega.. ye batane ka kam new keyword krta hai.. so go and add new there



/*  for those woh are aiming to go from sde2 to sde 3 or if aiming mang companies

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype. js classes thorugh consstructur function nahi deti new keyword k through constructor funciton deti hai

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/