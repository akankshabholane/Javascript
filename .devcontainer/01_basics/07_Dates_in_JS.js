//Date in JS is object(INTERVIEW)....represents milliseconds since the midnight at the beginning of January 1, 1970, UTC....avaScript date is fundamentally specified as the time in milliseconds that has elapsed since the epoch
//// JavaScript stores dates as number of milliseconds since January 01, 1970
let mydate = new Date();
// console.log(mydate);//2024-08-27T04:33:36.140Z
// // We can use various methods to convert this date into more readable value.
// console.log(mydate.toString());//Tue Aug 27 2024 04:33:36 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString());//Tue Aug 27 2024
// console.log(mydate.toISOString());//2024-08-27T04:27:20.498Z
// console.log(mydate.toJSON());//2024-08-27T04:27:20.498Z
// console.log(mydate.toLocaleDateString());//8/27/2024
// console.log(mydate.toLocaleString());//8/27/2024, 4:29:28 AM
// console.log(mydate.toLocaleTimeString());//4:29:28 AM
// console.log(mydate.toTimeString());//4:29:28 AM GMT+0000 (Coordinated Universal Time)


// let myCreatedDate = new Date(2023,8,29);//months start from 0 in JS
// console.log(myCreatedDate.toString());

// let myCreatedDate = new Date(2023,8,29, 12,12,12);//months start from 0 in JS
// console.log(myCreatedDate.toString());

// let myCreatedDate = new Date("2023-3-8");
// console.log(myCreatedDate.toString());

 let myCreatedDate = new Date("09-29-1982");
// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now();//used for quiz to see fastests person who answered
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));//INTERVIEW(millisecond to second)

let newDate = new Date;
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(`Today is ${newDate.getDate()}`);

newDate.toLocaleString('default', {
    weekday : "long",
})//isk andar ek object define krte hai..learn about it 

