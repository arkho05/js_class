const score = 400;
console.log(score);
// node 01_basics/06_nums_and_math.js

const balance = new Number(1000000000);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


// const otherNumber = 23.1895; //23.2
const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));



const hunders = 1000000000;
// console.log(hunders.toLocaleString('en-BD'));



// ++++++++++++++++ Math +++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4)); //only - value change + value 
// console.log(Math.abs(4));
// console.log(Math.round(3.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4 , 5 ,6 ,9 , 7 ,5, 2));
// console.log(Math.max(4 , 5 ,6, 9 , 7 ,5, 2));

//   Random

console.log(Math.random());
console.log(Math.random(Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10 ;
const max = 20 ;

console.log(Math.floor((Math.random () * (max - min + 1)))+min); //// formulaa ***important

