//node 05_iterations/seven.js

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8,9, 10]

// const newNums = myNumber.map( (num) => num + 10)
// const newNums = myNumber.map( (num) => {return num + 10} )

const newNums = myNumber.
                        map((num) => num * 10)
                        .map( (num) => num + 1 )
                        .filter( (num) => num >= 40 )
// console.log(newNums);




// const numbers = [3, 12, 54, 12, 4, 4, 3, 12, 16];

// const filteredNumbers = numbers.filter( (number, index) => numbers.indexOf(number) === index);

// console.log(filteredNumbers);


const number = [1, 2, 3, 4, 5]

const doubled = number.map( (item) => item * 2);

console.log(doubled);