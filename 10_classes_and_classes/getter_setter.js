// by default getters and setters are present in every class but agar humne usmein kuch code nahi likha hai toh woh by defaultl jo code likha hai woh hhe execute hota hai
//to control what and which data variables should be accessed and which should be not we use getter setter 
//jitni bhi properties banate ho ,unse by default getters and setters as a method banjati hai.. agar getter define kiya to compulsory setter bhi define krna padega

// class User{
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }

//     get password(){
//         return this.password.toUpperCase();
//     }

//     set password(value){
//         this.password= value.toUpperCase();
//     }
// }

// const akanksha = new User("a@gmail.com", 123);
// console.log(akanksha);

//getters get krne k kam aata hai.. konsi value get krna vhahate ho? password here toh in upper code constructor bhi password ki value set kara hai aur settter bhi password ki value set kara hai toh dono k bich main race lag jati hai ki yarr main set krunga toh yet race hume problem krti hai, iss he race k wajhase hume maximum call stack size exceeded ye error aata hai iska matlab apne pura stack ko bhar diya hai.. ye ek problem hai uska solution is- setter main alag variable use kro, but agar woh bhi kiya fir abh getter ka error aara hai so now alag variable for getter use kro.. abhi due to the change of the variable constructor is setting the password value but getter and setter are overriding that value..

class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value //setters ko return nhi krte hai
    }
    get password(){
        return this._password
    }
    
    // get password(){
    //     return `${this._password}akanksha`  //this line adds akanksha to the password user has set 
    // }

    set password(value){
        this._password= value  // now whenever you set a password it will get set as you have entered the value but die to touppercase written in the getter the user will always get the uppercase value even if the password you have set is in lower case
    }
}

const akanksha = new User("a@gmail.com", 123);
console.log(akanksha.password);
console.log(akanksha.email);
//in geeters ans setters the property name that you have given woh he use krna padega for the getter and setter methods