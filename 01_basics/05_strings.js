const name = "Arkho";
const repoCount =  50 ;

//node 01_basics/05_strings.js

// console.log(name  +  repoCount + " value");

console.log(`Hello my name is ${ name } and my repo count is ${ repoCount }`);


const gameName = new String ('Arkho-deb-surjos')


// console.log (gameName[0]);
// console.log (gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('k'));
// console.log(gameName.indexOf('o'));
// console.log(gameName.indexOf ('A'));



// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherStrings = gameName.slice(-5, 3)
// console.log(anotherStrings);



//trim
const newString = "  Arkho   "
console.log(newString);
console.log(newString.trim());

//replace
const url = "https://arkho.com/arkho%20deb"

console.log(url.replace('%20', '-'));

//
console.log(url.includes('arkho'));
console.log(url.includes('deb'));
console.log(url.includes('Surjo'));



console.log(gameName.split('-'));








