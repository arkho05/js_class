//const tinderUser = new Object() //singleton_object 
const tinderUser ={} ; //NON-singleton_object

//node 02_basics/04_object.js


tinderUser.id = "123abc";
tinderUser.name = "Arkho";
tinderUser.isloggedIn = false;

// console.log(tinderUser);

const  regularUser = {
    emaill : "ararkho@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Arkho",
            lastname : "deb",
         
        }
    }
    
}

// console.log(regularUser);

// console.log(regularUser.fullname.userfullname);

const obj1 = { 1 : "a", 2 : "b"};
const obj2 = { 3 : "a", 4 : "b"};
const obj4 = { 5 : "a", 6 : "c"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2, ...obj4};

// console.log(obj3);
const user = [
    {  id : "arkho",
       emaill: "a@gmail.com"

    },
    {

    },
    {

    }

]

user[1].user
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser)); //convert to array

// console.log(tinderUser.hasOwnProperty('isloggedIn'));



const course = { 
    coursename : "js in  hindi",
    price: "999",
    courseInstructor : "hitesh"

}

// course.courseInstructor //  don't use this command 
 const {courseInstructor : instructor} = course

 console.log(instructor);



//  const navbar = ({company}) => {

//  };

//  navbar(company = "arkho");

//json

// {
//     "name": "Arkho",
//     "coursename": "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]








