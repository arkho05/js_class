// node 01_basics/dataTypes_summary.js

// Primitive 

// 7 types : String  , Number , Boolearn , undefined , Symbol, BigInt


const score = 100 
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let UserEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)



const bigNumber = 12356894126467898464545445455155451544n //BigInt

// Reference (Non Primtive)

// Array , Objects , Functions

const heros = [ "Superman , Ironman , Captain_America , BlackPanther "]

let myObj ={
    name : "Arkho",
    age : 23,
}

const myFunction = function(){
    console.log("Hello_ World");
}
// console.log(typeof bigNumber);
// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof heros);
// console.log( typeof myObj);
// console.log(typeof  id);





// ++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (NOn-primitive)

let myYoutubename = "arkhodeb.com"

let anothername = myYoutubename
anothername = "Arkho wants to learn Javascript"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "user@google.com" ,
    upi: "user@ybl" 
}

let userTwo = userOne

userTwo.email = "ararkho@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

