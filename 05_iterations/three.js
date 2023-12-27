//node 05_iterations/three.js

//for of

//["", "", ""]
// [ {}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6, 7];

for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello world";

for (const greet of greeting) {
    // console.log(greet);
}



//Maps

const map = new Map()
map.set('BD', "Bangladesh")
map.set('USA', "United state of America")
map.set('IN', "india" )

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
}

const myObject = {
    game1 : 'NFS',
    game2 : 'PUBGI'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }







