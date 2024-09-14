const alphabetsA2E = ["a","b","c","d","e"]

const alphabetsF2J = ["f","g","h","i","j"]

// alphabetsA2E.push(alphabetsF2J);//here arrays k andar array aagaya hai..now f to j that array is one element it has index 5
// console.log(alphabetsA2E); //push exesting array pt hota hai

// console.log(alphabetsA2E[2]);
// console.log(alphabetsA2E[5]); //output is array to access i we'll have to
// console.log(alphabetsA2E[5][3]);


//concat returns new array
// const concatNewArray = alphabetsA2E.concat(alphabetsF2J)
// console.log(concatNewArray);

//spread operator(...)=> chizoko spread krta hai..cup of glass if dropped it spreads that is what spread operator is
// const all_new_alphabet = [...alphabetsA2E,...alphabetsF2J]//prefered this over concat
// console.log(all_new_alphabet);


// //nested array
// //.flat(infinity) = to flatten infinity level nested arrays
// const nestedArray = [1,2,3,4,[2,4],6,7,8,[22,33,44,[55,66,[77,88,99]]]]
// const nestedToFlatarray = nestedArray.flat(Infinity)
// console.log(nestedToFlatarray)

console.log(Array.isArray("Akanksha"));//false
console.log(Array.from("Akanksha"));//['A', 'k', 'a','n', 's', 'h','a']
console.log(Array.from({name : "Akanksha"}));//(INTERVIEW)[] as we have to mesntion whether we have to make array from key or from value

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3))//difference between array.of and array.from
console.log(Array.of("Akansha")) //[ 'Akansha' ]
//array.from=====>method creates a new Array instance from an array-like or iterable object.array-like objects (objects with a length property and indexed elements)iterable objects (objects where you can get its elements, such as Map and Set).
//array.of====>The Array.of() method creates a new Array instance with a variable number of arguments passed to it.