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


