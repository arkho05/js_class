
//node 03_basics/02_scopes.js

// var c =  300
// let a = 300

// if(true){
// let a = 10;
// const b = 20;
// console.log("Inner :", a);

// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// } 

//  console.log(a);
// console.log(b);
// console.log(c);


// function one() {
//     const username = "Arkho"
    
//     function two (){
//         const website = "youtybe"
//         console.log(username);
//     }
//     // console.log(website);

//     two()

// }
//  one()

if (true) {
    const username = "ARKHO"
    if (username === "ARKHO") {
        const website = " youtube"
        console.log(username +  website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++ interesting ++++++++++++



console.log(addone(5));
// addone(5)
function addone(num){
    return num + 1
}

// addtwo(10)

const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(6));

