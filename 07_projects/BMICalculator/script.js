const form = document.querySelector("form")
//here if written, thi use case will give empty value
//const height = parseInt(document.querySelector("#height").value)
form.addEventListener("submit" , function(e){
  e.preventDefault()//form submit nhi hona chahiye

  const height = parseInt(document.querySelector("#height").value)//to take i/p from input tag
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")

  if(height === "" || height < 0 || isNaN(height)){
    results.innerHTML = `Please Enter valid height ${height}`
  }else if (weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please Enter valid weight ${weight}`
  }else{
    const bmi = (weight/((height * height)/10000)).toFixed(2)
    if(bmi < 18.6){
      results.innerHTML = `Your bmi is ${bmi}.You are under Weight`
    }
    if(bmi > 18.6 || bmi < 24.9){
      results.innerHTML= `<span>${bmi}</span>`
      results.innerHTML = `Your bmi is ${bmi}.Your Weight is Normal`
    }
    if(bmi > 24.9){
      results.innerHTML= `<span>${bmi}</span>`
      results.innerHTML = `Your bmi is ${bmi}.You are Over Weight`
    }
  
  }
  
})