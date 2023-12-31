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

// console.log(doubled);


const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter(item => item % 2 === 0); 

// console.log(evens);

// const students = [
//     {name : "A", grade: 96},
//     {name : "B", grade: 92},
//     {name : "C", grade: 84},
//     {name : "D", grade: 65},
//     {name : "E", grade: 90}
// ];

// const studenGrades = students.filter(student => student.grade >= 90);
// return studenGrades;
// // console.log(studenGrades);


const num = [1, 2, 3, 4, 5, 6 ]

const sum = num.reduce( function (result, item) {return result + item} );

console.log(sum);