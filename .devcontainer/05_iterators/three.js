// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const nums of arr) {//here objects means kis chiz pr loop lagana hai?
    console.log(nums);
    
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(greet);   
}

//The Map object holds key-value pairs and remembers the original insertion order of the keys.Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration.
const map = new Map()

map.set('IN', 'India')
map.set('USA', 'Unites states of America')
map.set('Fr', 'France')
map.set('IN', 'India')

//console.log(map);

for (const key of map) {
    console.log(key);    
}

for (const [key, value] of map) {
    console.log(key + ":-" + value);    
}


const myObject = {
    "course1": "Maths",
    "course2": "Science",
    "course3": "History",

}
//for of is not working for objects
for (const obj of myObject) {
    console.log(obj);
    
}