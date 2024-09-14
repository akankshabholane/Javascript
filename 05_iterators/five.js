const myArray = ["Javascript", "Python", "C++", "C#"]

//for each takes callback function as first parameter.. call back function ko namenahi hota
// myArray.forEach( function (val){
//     console.log(val);
// } )

// myArray.forEach( (items) =>{
//     console.log(items);
// } )

function printMe(item){
    console.log(item);
}

// myArray.forEach(printMe)// reference dena hai
// myArray.forEach(printMe())//error

myArray.forEach((items, index, array) =>{
    console.log(items, index, array);
})
console.log("------------------------------------------------------------");

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
    
} )