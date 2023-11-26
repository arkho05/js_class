//node react_hm/destructuring.js

const nameOne = ['Arkho', 'Deb']

const [firstName, lastName] =nameOne

console.log(firstName, lastName)

const jedi = {
    id : 1,
    name : 'Arkho Deb',
    lightsaber : true,
    species : 'Human'
}

const {name: jediName, species, ...reset} = jedi

console.log(jediName);
console.group(species);

let a, b, rest;
[a, b] = [10, 20];

console.log(a);

console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);


const x = [ 1, 2, 3, 4, 5, 6, 7, 8];

const [y, z,u] = x;

console.log(y);

console.log(z);

console.log(u);


