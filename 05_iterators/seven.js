const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (items)=> items + 10 )

//console.log(newNums);

//chaining :- where we can use multiple function

const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNum
                    .map( (nums) => (nums * 10) )//value of this chain will be pased to next chain
                    .map( (nums) => (nums + 1) )
                    .filter( (nums)=>(nums <= 50) )
console.log(newNum);
