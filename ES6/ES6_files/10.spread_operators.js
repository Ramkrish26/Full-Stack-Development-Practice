// Spread operator is used to inject an array as an argument
const arr = [3, 4, 5]
const newArr = [1, 2, ...arr]
console.log(newArr)

// Copy array
const copyArr = [...arr]
console.log(copyArr)

// Merging a array
const MergedArr = [...arr, ...copyArr]
console.log(MergedArr)

//Spread operator in a function
function addNumbers(a, b) {
    console.log(a + b);
}
const addArr = [1, 2]
addNumbers(...addArr);

// From ES2018 spread operators works on objects too