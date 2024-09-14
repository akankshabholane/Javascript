//const tinderUser = new Object();//singleton object
const tinderUsers = {}//non singleton object


tinderUsers.id = "123abc"
tinderUsers.name = "Akanksha"
tinderUsers.isLoggedin = false
//console.log(tinderUsers);

const regularUser = {
    email : "adggag@gmail.com",
    fullName: {
        userfullName : {
            firstName : "Akanksha",
            lastName : "Bholane"
        }
    }
}

console.log(regularUser.fullName.userfullName.firstName);

//optional chaining is fullName doesnnt exist then :-
//console.log(regularUser.fullName?userfullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//const obj3 = {obj1, obj2}
//console.log(obj3);//obj 3 main 2 obj crate hote hai

//const obj3 = Object.assign({}, obj1, obj2)//obj assign mdn doc 
//console.log(obj3);

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {

    },
    {

    },
    {

    }
       
]

users[1].email
console.log(tinderUsers);

console.log(Object.keys(tinderUsers));//returns array
console.log(Object.values(tinderUsers));
console.log(Object.entries(tinderUsers));

console.log(tinderUsers.hasOwnProperty('isLoggedin'));//true
console.log(tinderUsers.hasOwnProperty('isLogged'));//false
//in browser console
//const obj1 = {1:"a", 2:"b"}
//obj1

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor

//const {courseInstructor}= course
//console.log(courseInstructor);

const {courseInstructor : instructor}= course//it is called as destructoring of object
console.log(instructor);

// {
//     "name": "hitesh",
//     "course" : "js in hindi",
//     "price" : "free" 
// }

[
    {},
    {},
    {}
]












