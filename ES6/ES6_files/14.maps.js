const [x, y, z] = [1, NaN, 2]
const obj = {
    name: "Ram",
    Id: "1"
}
const add = () => x + z;
let arr = [4, 5, 6];

// Creating maps
let myMap = new Map([["firstName", "Ram"], ["lastName", "Krish"]]);
console.log(myMap);

let myMap2 = new Map();
myMap2.set(x, y);
myMap2.set(add(), arr);
myMap2.set(obj, x);
console.log(myMap2);
console.log(myMap2.has(add()));
console.log(myMap2.has(obj));
myMap2.delete(add());
console.log(myMap2);
myMap2.clear();

console.log(myMap2);

// Iterators
for (const value of myMap)
    console.log(`Value of map = ${value}`);

for (const [key, value] of myMap.entries())
    console.log(key, value);

for (const value of myMap.values())
    console.log(value);

for (const value of myMap.keys())
    console.log(value);

console.log(myMap2);
