//singleton
//Object.create

//object literals

//node 02_basics/03_object.js
const mySym = Symbol("key1");

const JsUser = {
    name : "Arkho",
    "full name": "Arkho deb",
    [mySym] : "mykeyValue",
    age : 18 ,
    location : "kamalpur" ,
    email : "ararkho@gmail.com" ,
    isloggedIn : false ,
    lastloginDays: ["Monday", "saturday"]
};

// console.log(JsUser.email); don't used

// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "whatleessboy@gmail.com"
//Object.freeze(JsUser);
JsUser.email = "whatleesboy@yayhoo.com"
// console.log(JsUser.email);
       

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`HEllo JS user , ${this.name}`);
} 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





