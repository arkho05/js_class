//node react_hm/concat.js

const arr1 = [1, 2, 3, 4]
const arr2 = [10, 20, 30, 40]
const arr3 = [100, 200, 300, 400]


const mergedArr = arr1.concat(arr2, arr3)

console.log(mergedArr);



const arrOne = [ 'a' , 'b', 'c' ];
const arrTwo = [ 'd', 'e', 'f'];
const arrayThree = arrOne.concat(arrTwo);


console.log(arrayThree);



// ################## Concatenating two arrays ######## //

const letters = ["Arkho", "Rony", "Topan"]
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers)

console.log(alphaNumeric);


// Concatenating nested arrays //


const numOne = [[1]];
const numTwo = [2, [3,5]];

const NastedArray = numOne.concat(numTwo);

console.log(NastedArray);

numOne[0].push(4);
numTwo[1].push(6);

console.log(NastedArray);

/// Concatenating array-like objects with Symbol.isConcatSpreadable ///


const obj1 = {0: 1, 1: 2, 2: 3, length: 3};
const obj2 = {0: 2, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true};

console.log([0].concat(obj1, obj2));


// Using concat() on sparse arrays //


console.log([1, , 3].concat([4,5])) 

console.log([1, 2].concat([3,, 5]))



//Calling concat() on non-array objects

console.log(Array.prototype.concat.call({}, 1, 2, 3));

console.log(Array.prototype.concat.call(1, 2, 3));

const arrayLike = {
    [Symbol.isConcatSpreadable]:true,
    length: 2,
    0: 1,
    1: 2,
    2: 99 // ignored by concat () since langth is 2 
}

console.log(Array.prototype.concat.call(arrayLike, 3, 4));










