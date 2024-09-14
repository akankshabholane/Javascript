const myObject = {
    "course1": "Maths",
    "course2": "Science",
    "course3": "History",

}

for (const key in myObject) {
    console.log(key);
    
}
for (const key in myObject) {
    console.log(myObject[key]);
}

for (const key in myObject) {
    console.log(`${key} of ${myObject[key]}`);
}

//for in for array
const myArray = ["Javascript", "Python", "C++", "C#"]
for (const key in myArray) {
    console.log(key);
    
}

for (const key in myArray) {
    console.log(myArray[key]); 
}
console.log("----------------------------------------------------------");

//MAP
const map = new Map()

map.set('IN', 'India')
map.set('USA', 'Unites states of America')
map.set('Fr', 'France')
map.set('IN', 'India')

for (const key in Map) {
    console.log(key);
}
//map is not iterable
//for objects use for in loop
//for arrays for of

