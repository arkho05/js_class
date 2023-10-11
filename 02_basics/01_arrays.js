// Array
// node 02_basics/01_arrays.js

const myArr = [ 0 ,1 ,2 ,3 ,4 ,5 ];
const myHeors = [ "Shaktiman", "spider_man" ,"captainAmerica" ];

const myArr2 = new Array(1, 2, 3,4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop() // remove last value

// myArr.unshift(9); // star in frist value
// myArr.shift() ;

// console.log(myArr.includes(9));
// console.log(myHeors.includes());
// console.log(myArr.indexOf(9));// -1
// console.log(myArr.indexOf(3));  


// const newArr = myArr.join()// this (join) command conver array to strings 

// console.log(myArr);
// console.log(typeof newArr);

// console.log(myArr);


console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);



