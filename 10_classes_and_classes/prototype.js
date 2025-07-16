let myName = "Akanksha  " //without space 8 with space 10 is the length

console.log(myName.length);
// i want a property just lik length which will give me the true length from the text withour spaces.. there are ways to do so but here i specifically want a property


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",

    getspiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

//we want koyi bhi kabhi bhi object declare ho toh base us object k andar he declare kro

Object.prototype.akanksha = function(){  //here akanksha method is injected in object so all obejcts will get the method.. but if we inject only in array than as a parent will object also have that method?
    console.log(`Akanksha is present in all objects`);
    
}

heroPower.akanksha();

myHeros.akanksha();

Array.prototype.heyAkanksha = function(){
    console.log(`Hey Akanksha`);

}

myHeros.heyAkanksha(); // only array has the access

heroPower.heyAkanksha(); // only array has the access therefore object here cant have the access

//Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // used to link to the object so it can use its properties
}

Teacher.__proto__ = User // teacher user ki sari properties access kr sakta hai yahi prototypical inheritance hai kisi aur ki properties ko acces kr sakte ho.. outdated syntax

//har object apne aap main ek instance hai.. aisa nhi hai ki apas main kuch share kre hai , sabhko alag alag properties hai, default properties toh sbhk pass hai lekin, agar apko chahiye jaha object link hojaege toh use __proto__

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()