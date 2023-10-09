console.log("Arkho");

console.log("\u{1F600}");// prints  SMILLEY FACE EMOJI

console.log("\u0301");

//node 01_basics/test.js

// Write a JavaScript function to convert a number from one base to another.
//Note : Both bases must be between 2 and 36.

const base_convert = function(number, initial_base, change_base) {
    if ((initial_base && change_base) <4 || (initial_base && change_base)>40)
     return 'Base between 4 and 40';
    
     return parseInt(number + '', initial_base)
     .toString(change_base);
 }
 
//  console.log(base_convert('E',16,8));
//  console.log(base_convert(1000,2,8));

 //Note : Both bases must be between 4 and 40.

// const base_convert = function (number, initial_base, change_base) {
//      if ((initial_base && change_base) < 4 || (initial_base && change_base) > 40);
//      return parseInt(number + '', initial_base).toString(change_base);
//       return 'Base between 4 and 40';

//  }

 console.log(base_convert('E164,16,8'));
 console.log(base_convert( 1000,2,8));
