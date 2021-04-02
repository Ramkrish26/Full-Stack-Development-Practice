// To convert collections to array Array.from method is used
// Cannot convert object into an array
const obj = {
    name : "Ram",
    id : 2
}

console.log(obj);

// set to array
let set1 = new Set();
set1.add("Ram");
set1.add("Krish");
set1.add("Testing");

console.log(set1);
console.log(Array.from(set1));

// string to array
const str = "ram";
console.log(str);
console.log(Array.from(str));

// arguments to array
function add(){
    console.log(arguments);
    console.log(Array.from(arguments));
}
add(1,2,3,4);