
//node 03_basics/03_arrow.js

const user = {
    username : "Arkho",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website `);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Surjo";
// user.welcomeMessage()

// console.log(this);

// function lateNight() {
//     let username = "Arkho"
//     console.log(this.username);
    
// }

// lateNight()


// const lateNight = function() {
//     let username = "Arkho"
//     console.log(this.username);
// }


const lateNight = () => {
    let username = "Arkho"
    // console.log(this);
}

// lateNight()


//arrow_funtion

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2
 
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Arkho"})


console.log(addTwo(3, 4))






