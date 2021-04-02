// Contains unique values
let mySet = new Set();
mySet.add("Ram");
mySet.add("Krish");
const obj = {
    name : "Ram",
    id : 1
};
mySet.add(obj);
console.log(mySet);

let mySet2 = new Set("hello");
console.log(mySet2);

console.log(mySet2.has("h"));
mySet2.delete("h");
console.log(mySet2);
mySet2.clear();
console.log(mySet2);

// Iterators
for (const value of mySet)
    console.log(value);

for (const [key, value] of mySet.entries())  
    console.log(key, value);

for (const value of mySet.values())  
    console.log(value);

// Intersection and difference
let set1 = new Set();
set1.add("Ram");
set1.add("Krish");
set1.add("Testing");

let set2 = new Set();
set2.add("Ram");
set2.add("Krish");
set2.add("Development");
let arr1 = [...set1];
console.log(`Intersection : ${arr1.filter((item) => set2.has(item))}`);
console.log(`Difference : ${arr1.filter((item) => set2.has(item))}`);
