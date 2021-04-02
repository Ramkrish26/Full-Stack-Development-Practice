const ONSTATE = Symbol("on");
const OFFSTATE = Symbol("off");
const feature1 = Symbol("feature");
const feature2 = Symbol("feature");

const obj = {
    brand : "Audi",
    [feature1] : "LED lights",
    [feature2] : "Air bags",
    state : "off",
    turnOn(){
        this.state = "on";
    }
}
// console.log(obj);

const arr = ["Ram", "krish", 1];
console.log(arr);

let it = arr[Symbol.iterator](); // ["value", done]
// let it = arr.entries(); // [["key","value"], done]
for (x of it)
   console.log(`value ${x}`);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

