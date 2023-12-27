//node 05_iterations/four.js


const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
};


for (const key in myObject) {
//    console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject}`);
}


const programing = ["js", "java", "php" , "py", "rb" , "cpp"
]


for (const key in programing) {
    console.log(programing[key]);
}
