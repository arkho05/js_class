//if

//node 04_control_flow/one.js

// const isUserloggedIn = true
// const tamperature = 40;

// if (tamperature < 50 ){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50")
// }

// console.log("Execute");


// // <, >, <=, >=, ==, !=, ===


// // const socre = 200
// // if(socre > 100) {
// //     const power = "fly"; // var totaly global scope
// //     console.log(`user power : ${power}`);
// // }

// // console.log(`user power : ${power}`);



// //short hande noticetion

// const balance = 1000

// // if(balance > 5000) console.log('test'),console.log("test2")

// if (balance < 500) {
//     console.log("less than 500");

// }else if (balance < 750){
//     console.log("less than  750");
// }else if (balance < 900) {
//     console.log("less than 750");
// }else {
//     console.log ("less than 1200");
// }

const isUserloggedIn = true ;
const debitCard = true ;
const loggedInFromGoole = true;
const loggedInFromEmail = true ;



if (isUserloggedIn && debitCard && 2 == 2) {
    console.log("Allow to buy course");
}


if ( loggedInFromGoole || loggedInFromGoole  ) {
     
    console.log("User Logged in");

}

// Nullish Coalescing operator(??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary 

// condiion ? true : false 

const  iccTeaprice = 100
iceTeaPrice <= 80 ?
 console.log("less than 80") : console.log("more than 80");





































































































































































