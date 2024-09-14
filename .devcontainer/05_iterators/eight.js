//reduce

const myArray = [1,2,3,4]
let initialVal = 0
// const newNums = myArray.reduce( function (acc, currval){
//     console.log(`acc value is ${acc}`);  //acc ko pehele initial value jati hai then acc + currvalka result store hota hai acc main
//     return acc + currval
// },initialVal  )

// const newNums = myArray.reduce( function (acc, currval){
//     console.log(`acc value is ${acc}`);
//     return acc + currval
// },3  ) //initial value main jo bhi dete hai woh acc ki initial value ban jati hai
// console.log(newNums);

const newNums = myArray.reduce( (acc, currval)=> (acc + currval),0 )
console.log(newNums);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc, currval)=>(acc + currval.price), 0 )
console.log(totalPrice);
