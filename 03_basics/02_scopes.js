
//node 03_basics/02_scopes.js

// var c =  300
let a = 300

if(true){
let a = 10;
const b = 20;
console.log("Inner :", a);

}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// } 

//  console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Arkho"
    
    function two (){
        const website = "youtybe"
        console.log(username);
    }
    // console.log(website);

    two()

}
//  one()

if(true) {
    const username = "ARKHO"
    if(username=== "Arkho") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);