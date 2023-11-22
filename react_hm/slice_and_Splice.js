//node react_hm/slice_and_Splice.js
 const charatersArr = [
    'Witcher',
    'Harray Potter',
    'Luke Sykwalker',
    'Tony Stark',
 ]


 const copyArr = [...charatersArr]

 copyArr.splice(0, 1);
 console.log(copyArr);

//[ 'Harray Potter', 'Luke Sykwalker', 'Tony Stark' ]


copyArr.splice(copyArr.length, 1 , 'Wonder Woman');
console.log(copyArr)


const selected = charatersArr.slice(0,2);
console.log(selected)

console.log(charatersArr)

//// =================Slice===================== //

const cities = ["Tokeyo", "Cairo", "los angeles", "paris" , "Seattle" ];

// cities.slice()

// console.log(cities);

// const newCityArr = cities.slice(2);
// console.log(newCityArr);


const newCityArr = cities.slice(2);
// const newCityArr = cities.slice(-2);
//const newCityArr = cities.slice(5);

console.log("Original:", cities);
console.log("New:", newCityArr);




// (((((((((((((((((( Splice )))))))))))))))))) //


// splice(start, optional delete count, optional items to add)

const food = ['pizza','cake', 'salad', 'cookie']

food.splice(5, 0,"burruto");//add someting

food.splice(3,1);// remove sytex

console.log(food);

console.log(food.splice(1,0,"burrito"));// [Emtry]














