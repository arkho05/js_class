// node 02_basics/02_arrays.js

 const marvel_heros = ["CaptinAmerica", "IronMan", "BlackPanther"];

 const dc_heros = [ "SuperMan", "AquaMan", "BatMan"];

//  marvel_heros.push(dc_heros);

//  console.log(marvel_heros); 
//  console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

//spread ...
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

/// flat array 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]];

// const real_another_array = another_array.flat(1);
const real_another_array = another_array.flat(Infinity);
console.log(typeof(real_another_array));

console.log(real_another_array);


console.log(Array.isArray("Arkho"));
console.log(Array.from("Arkho"));
console.log(Array.from({name : "hitesh"})); //intersting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));




///Array PACKED vs HOLEY



