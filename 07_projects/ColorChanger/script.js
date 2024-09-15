const box = document.querySelectorAll(".box")
const body = document.querySelector("body")

box.forEach( function(box){
  console.log(box)
  box.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'Tomato'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === 'SteelBlue'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === 'LimeGreen'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === 'HotPink'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === 'DarkOrange'){
        body.style.backgroundColor= e.target.id;
      }
  
  })
} )