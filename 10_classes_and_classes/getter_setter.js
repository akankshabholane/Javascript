// by default getters and setters are present in every class but agar humne usmein kuch code nahi likha hai toh woh by defaultl jo code likha hai woh hhe execute hota hai
//to control what and which data variables should be accessed and which should be not we use getter setter 
//jitni bhi properties banate ho ,unse by default getters and setters as a method banjati hai.. agar getter define kiya to compulsory setter bhi define krna padega

class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this.password.toUpperCase();
    }

    set password(value){
        this.password= value.toUpperCase();
    }
}

const akanksha = new User("a@gmail.com", 123);
console.log(akanksha);

//getters get krne k kam aata hai.. konsi value get krna vhahate ho? password here toh in upper code constructor bhi password ki value set kara hai aur settter bhi password ki value set kara hai toh dono k bich main race lag jati hai ki yarr main set krunga toh yet race hume problem krti hai, iss he race k wajhase hume maximum call stack size exceeded ye error aata hai iska matlab apne pura stack ko bhar diya hai.. ye ek problem hai uska solution is-