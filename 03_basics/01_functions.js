//node 03_basics/01_functions.js
function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("k");
    console.log("H");
    console.log("O");
    
}

//sayMyName()

function addtwoNumbers(number1, number2)//parameter
{
    // console.log(number1 + number2);

    // let result = number1 + number2 
    // return result //when we are use return keywoed after this funstion don't count any value
    return number1 + number2
    
    
}

// addtwoNumbers(3, 5) 

const result = addtwoNumbers (3, 5)

console.log("Result :", result);



function loginUserMassage(username = "Surjo"){
    if(!username)// ! this value convert true = false  and false = true  
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//  console.log(loginUserMassage("Arkho"));
console.log(loginUserMassage("Arkho"));








