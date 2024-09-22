// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// before promise we use to use bluwbird library wnd eventually that lib was added in js

//promise reduces callbaack hell
const promise1 = new Promise(function(resolve, reject){//promise creation
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
        
    }, 1000)

})

// .then() ka sidha connection hai resolve k sath..then() is connected when resolve() is called in the promise creation
promise1.then(function(){
    console.log("Promise Consumed");
    
})
//OR

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2 task");
        resolve()
    },1000)
    
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Akanksha", mail: "akanksha@gmail.com"})//values in resolve can be array, object ,etc
    },1000)
})

promise3.then(function(user){
    console.log(user);
    
})

const promise4 = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Akanksha"})
        }else{
            reject("Error")
        }
    },1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is eithr resolved or rejected"))


const promise5 = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Anushka"})
        }else{
            reject("Error present")
        }
    },1000)
})

async function consumerPromise5(){
    try{
        const response = await promise5
    console.log(response);
    } catch(error){
        console.log(error);
        
    }    
}

consumerPromise5()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()
