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


// const num = [1, 2, 3, 4, 5, 6 ]

// const sum = num.reduce( function (result, item) {return result + item} );

// console.log(sum);

// const pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const  petCounts = pets.reduce(function(obj, pet) {
//     if( !obj [pet]) {
//         obj [pet] = 1;
//     }else{
//         obj [pet] ++;
//     }
//     return obj;
// })

// console.log(petCounts);


const pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

const petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});


// const employees = [
//     { name: 'David Carlson', age: 30 },
//     { name: 'John Cena', age: 34 },
//     { name: 'Mike Sheridan', age: 25 },
//     { name: 'John Carte', age: 50 }
//   ];
  
//   const filtered = [];
  
//   for(let i = 0; i < employees.length; i++) {
//    if(employees[i].name.indexOf('John') > -1) {
//      filtered.push(employees[i]);
//    }
//   }


// const filtered = employees.filter(function (employee) {
//     return employee.name.indexOf('John') > -1;
//   });
  
//   console.log(filtered); // [ { name: "John Cena", age: 34 }, { name: "John Carte", age: 50 }]



// const fanBases = [
//     {name: 'Arkho Deb', age: 24},
//     {name: 'Rony Deb', age: 25},
//     {name: 'Topan Dhar', age: 24},
//     {name: 'Liton Don', age: 30},
// ]
  
// const filtereded = fanBases.filter( function (item) {
//     return item.age.indexof('24') > -1;
// });

// console.log(filtereded);



const arrNumbers = [10, 20, 30, 40, 50, 60, 75]

const ownNum = arrNumbers.filter( function (arrNumber){
    return arrNumber >= 30;
});

// console.log(ownNum);


const checkedState = [true, false, false, true, true];

const onlyTrueValues = checkedState.filter(function(value) {
  return value === true;
});

console.log(onlyTrueValues); // [true, true, true]