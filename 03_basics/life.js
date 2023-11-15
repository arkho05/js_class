//node 03_basics/life.js

//Immediately Invoked Function Expressions (IIFE)

(function lateNight() {
    //name IIFF
    console.log(`DB CONNECTED`)
})();


 ( (name) => {
    console.log(`DB connected Two ${name}`);
 })('Arkho');

// (function aurcode() {
//     console.log(`DB CONNECTED TWO`)
// })();