//control flow or logic  flow means login k time alag code run ho, logout k time alag code run ho
const balance = 1000

if(balance >900){
    console.log("Huge Balance");
}
            //OR
// called as implicit scope
if(balance >900) console.log("Huge Balance");
//if(balance >900) console.log("test1"),console.log("test"); dont write such type of code

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}