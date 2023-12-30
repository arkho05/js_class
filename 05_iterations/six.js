//node 05_iterations/six.js

const coding = [ "js", "ruby" , "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })


// console.log(values);



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]

// const newNums = myNums.filter( (num) => {
//     return num>4
// })



// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    { title:'book One', genre: 'fiction', publish: 1981, edition: 2004 },

    { title:'book Two', genre: 'Non-fiction', publish: 1981, edition: 2004 },

    { title:'book Three', genre: 'History', publish: 1992, edition: 2008 },

    { title:'book Four', genre: 'History', publish: 1999, edition: 2010 },

    { title:'book five', genre: 'science', publish: 2009, edition: 2014 },

    { title:'book six', genre: 'fiction', publish: 2008, edition: 2012 },

    { title:'book Seven', genre: 'History', publish: 2012, edition: 2018 },

    { title:'book Eight', genre: 'Non-fiction', publish: 1981, edition: 2004 }
]

let userBooks = books.filter( (bk) => bk.genre === 'science')

 userBooks = books.filter( (bk) => {
    return bk.publish >=1995 && bk.genre === "History" }) 
    //if you open scope you have to use 'return' keyword..

// userBooks = books.filter( (bk) => bk.publish >=1995)


console.log(userBooks);