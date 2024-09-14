// console.log("2" > 1);//here JS automatically converted 2 into number
// console.log("02" > 1);
//this above method give an unpredictable result in somecases so make sure that you use variable of same datatype during comparision
//---------

console.log(null > 0); //=> false
console.log(null == 0);//=>false
console.log(null>= 0);//=>true ...reason is that equality checking == and comparisons > >= < <= operators work differently..comparisons convert null to a number, treating it as 0 thats why 1 and 3 has suc outcomes


console.log(undefined ==0)
console.log(undefined >0)  
console.log(undefined < 0) //no mater what comparison we use it reutrns a false

//strict check ===