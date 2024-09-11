


if(true){
    let a = 10
const b = 20
var c = 30//it gets printed


}
//console.log(a);
//console.log(b);
console.log(c); 
//global scope k values can be used in local scope but reverse is not possible
//INTERVIEW:-browsers ka global scope or node se global scope is different


function one (){
    const username = "akanksha"
    function two (){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    
    two()
}
one()
//bade chote se icecream nhi mang sakte

if(true){
    const username = "akanksha"
    if(username ==="akanksha"){
        const website = " youtube"
        console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);

console.log(addone(5))//6 in this case we can access before declaring the function
function addone(num){
    return num + 1
}
console.log(addone(5))//6


console.log(two(5))//error as functionis stored in varaiable and i am accessing it before declaring the function
const two = function (num1){
    return num1 +2
}
//console.log(addTwo(4));//error
console.log(two(5))//7