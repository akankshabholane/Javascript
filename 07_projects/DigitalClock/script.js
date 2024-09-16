const clock = document.getElementById('clock')

// let date = new Date()
// console.log(date.toLocaleTimeString)

//to continuously run a method after set time 
//setInterval(function(){},1000) write in this manner
setInterval(function(){
  let date = new Date()
  //console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000)