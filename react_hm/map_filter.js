
//node react_hm/map_filter.js
const DATA =[
    {id: 1, title: 'first'},
    {id: 2, title: 'second'},
    {id: 3, title: 'third'},
    {id: 4, title: 'fourth'},
]

const upperData = DATA.map(el=> el.title.toUpperCase())
// console.table(upperData);


const moduloData = DATA.filter(el =>el.id % 2 === 0)
// console.table(moduloData);
//  console.table(DATA);

const  map1 = new Map();

 map1.set('a', 1);
 map1.set('b', 2);
 map1.set('c', 3);

 console.log(map1.get('a'));
 // Expected output: 1

 map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);

map1.delete('b');

console.log(map1.size);



//The correct usage for storing data in the Map is through the set(key, value) method.

const contacts = new Map();

contacts.set("Arkho", { phone: "01796441407", address: "Kampur,Moulivibazar,Sylhet"});

contacts.has("Arkho");//true

// contacts.get("Surjo"); //undifined
contacts.set("Surjo",{ phone: "01746861805", address:"kamalpur,Moulivibazar,sylhet"});

contacts.get("Arkho");

// console.log(contacts);
contacts.delete("Surjo")
console.log(contacts.size)


//++++++++++++++Using the Map object++++++++++++++++//

const myMap = new Map();


const keyString = "a String";

const keyObj ={};

const keyFunc = function () {}

//setting the valaues 

myMap.set(keyString, "valu associated with 'a Strindgs'");

myMap.set(keyObj, " value asociated with keyObj");

myMap.set(keyFunc, " value assciaterd eith keyFunc");

console.log(myMap.size); //3
// console.log(myMap);


//getting the values 

console.log(myMap.get(keyString));
console.log(myMap.get(keyObj));
console.log(myMap.get(keyFunc));

console.log(myMap.get("a String"));

console.log(myMap.get({}));

console.log(myMap.get(function(){}));



///================== Using NaN as map keys ====================

const mineMap = new Map();

myMap.set(NaN, "not a number");

myMap.get(NaN);
//"not a number"

const otherNaN = Number("fooo");

//"not a number"

console.log(otherNaN);


//*********** Iterating Map with for...of ********************//

const newMap = new Map();

newMap.set(0, "zero");
newMap.set(1, "one");

for (const [key, value]of newMap) {
    console.log(`${key} = ${value}`);
}

for(const key of newMap.keys()) {
    console.log(key);
}


for(const value of newMap.values()) {
    console.log(value);
}

for (const [key, value] of newMap.entries()) {
    console.log(`${key} = ${value}`);

}


//################ Iterating Map with forEach() ############## //


newMap.forEach ((value, key) => {
   console.log(`${key} = ${value}`);
});


// !!!!!!!!!!!!!!!! Relation with Array objects !!!!!!!!!!!!!! //

const kvArray =[
    ["key1", "value1"],
    ["key2", "value2"],
];

// use the regular Map Constrctor to transfrom a 2D key-value array into a map

const ownMap = new Map(kvArray);

console.log(ownMap.get("key1",)); // "value1"

//Use Array from() to transform a map into a 2D key-value Array
console.log(Array.from(ownMap));

//will show you exactly the same Array into a map

//a succunct way to do the same, using the spread syntax

 console.log([...ownMap])

 //or use the keys() or values( iterators, and convert them to an array)

 console.log(Array.from(ownMap.keys()));
//Note: Keep in mind that the data itself is not cloned.




// %%%%%%%%%%%%%%% Maps can be merged, maintaining key uniqueness: %%%%%%%%%%%%% //

const first = new Map ([
    [1, "one"],
    [2, "two"],
    [3, "three"],
])

const second = new Map([
    [1, "uno"],
    [2, "dos"],
])


//merage two maps. the last repeated key wins.
//spread syntax essentially converts a map to an Array


// const merged = new Map ([...first,...second,]);


// console.log(merged.get(1));
// console.log(merged.get(2));
// console.log(merged.get(3));


const merged = new Map ([...first,...second,[1, "eins"]]);


console.log(merged.get(1));
console.log(merged.get(2));
console.log(merged.get(3));




// <<<<<<<< Cloning and merging Maps >>>>>>>>>>>>>>> //

const original = new Map([[1, "one"]]);

const clone = new Map (original);

console.log(clone.get(1));

console.log(original ===clone); //false (useful for sallow comparison)









 






