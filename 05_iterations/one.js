//for 

//node 05_iterations/one.js

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element== 5) {
        // console.log("5 is the best number");
    }
    // console.log(element); 
    
}


//  console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log( i + '*' + j + '=' + i*j);
        
    }
    
}




let myArray = ["flash", "Batman", "SuperMan"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


//break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`)
        break
    }
    // console.log(`Value of i is ${index}`);
    
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`)
        continue
    }
    // console.log(`Value of i is ${index}`);
    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`)
        continue
    }
    // console.log(`Value of i is ${index}`);
    
}


for (let i = 0; i <3; i++){
    let name = "Arkho";
    // console.log("Hi, my name is" + name);
}


for (let i = 1; i <= 5; i++) {
    // console.log(i);
};


for (let i = 2; i <= 10 ; i+=3) {
    // console.log(i);
}


//******** Break *********** //

// for (let i = 1; i <=10; i++) {
//     if(i == 5) {
//         break
//     }
//     // console.log(i)
// }
// // let sum = 0;

// for (let i = 1; i <= 10; i++) {
    // sum += i; 
// }

// console.log('The sum of 1 to 10 is:',sum);


let sum = 0;
let n = 10;

for(let i = 1; i <=n ; i++) {
    sum+=i;
};

// console.log('The sum of 1 to 10 is:',sum);


// ######### Array chack #####

let numbers = [ 1, 4, 44, 64, 55, 24, 32, 55, 19, 17,74, 22, 23];
let max = 0;
let min  = 0 ; 

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 != 1){
        evenNumbers.push(numbers[i]);
    }else{
        oddNumbers.push(numbers[i]);
    }
}

console.log("The even numbers are :" + evenNumbers);

console.log("The odd numbers are :" + oddNumbers);



// %%%%%%%%%%%% Maximum and Minimum Number %%%%%%%

for (let i = 0; i <numbers.length; i++) {
    if (numbers[i]  > max) {
        max = numbers[i];
    }
}


console.log(max); 


for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] < min) {
        min = numbers[i];
    }
}


console.log(min); 


















