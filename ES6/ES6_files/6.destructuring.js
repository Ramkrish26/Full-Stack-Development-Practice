//ES5
var a = 2;
var b = 3;
console.log(a);
console.log(b);

//ES6 Destructuring
var [c, d] = [2, 3];
console.log(c);
console.log(d);

//Swapping two numbers
//ES5
// var e = a;
// a = b;
// b = e;
// console.log(a, b);

//Es6
[a, b] = [b, a]
console.log(a, b);

//Default values for a variable if it doesnt't have any value assigned
let list = ['Chennai', 'India'];

//ES5
// var city = list[0];
// var country = list[1] === undefined ? 'USA' : list[1];
// console.log(city, country);

//ES6
[city, country = "USA"] = list;
console.log(city, country);

// Destructuring in nested array
const nestedArray = [2, 3, [5, 6]]
// const [i, , j] = nestedArray;
// console.log(i, j);
//result = 2, 2[5,6]

const [i, , [j, k]] = nestedArray
console.log(i, j, k);
//result = 2, 5, 6