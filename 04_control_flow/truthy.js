//node 04_control_flow/truthy.js


const userEmail = "ar@arkho.ai";

if (userEmail) {
    console.log("Get user email");
}else { 
    console.log("Don't have user email");
}

//   falsy values

// false, 0 , -0, BigInt on, "", null, undefined, NaN


//truthy values

//"0", 'fasle', " ", [], {}, function(){}

// if(userEmail.length === 0) {
//     console.log("Array is Empty")
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty")
}



