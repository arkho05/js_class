// node react_hm/find_and_findIndex.js

const DATA = [
    {id: 1, title: 'first'},
    {id: 2, title: 'second'},
    {id: 3, title: 'third'},
    {id: 4, title: 'fourth'},
]

const itemIdx = DATA.findIndex(el=> el.id === 2)

console.log(itemIdx);


const item = DATA.find(el=>el.id === 2)

console.log(item);



/// FINDINDEX ///

const array1 = [5, 12, 8, 130, 44];

const islargeNumber = (element) => element> 13;

console.log(array1.findIndex(islargeNumber));



function isPrime(element) {
    if (element % 2 === 0 || element < 2) {
      return false;
    }
    for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
      if (element % factor === 0) {
        return false;
      }
    }
    return true;
  }

console.log([4, 6, 8, 9, 12].findIndex(isPrime))

console.log([4, 6, 7, 9, 12].findIndex(isPrime))


const arrayLike = { 
    length : 3,
    "-1" : 0.1, // ingore by finfIndex () -1 < 0
    0 : 2,
    1: 7.3,
    2:4,

 }


 console.log(Array.prototype.findIndex.call(arrayLike, (x) => !Number.isInteger(x)))
