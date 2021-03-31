const items = ["Apple", "Banana", "Carrot"];

// Arrays are iterable 
for (const i of items)
    console.log(i);

// Iterators 
// next() -> {value: , done : boolean}. (done == false) ? next element is present : next element is not present
// entries() will return value and index ,values() will return onlu the value, keys() will return only index
// let itemsIterator = items.entries();
let itemsIterator = items.values();
let option = true;
while (option) {
    let obj = itemsIterator.next();
    if (obj.done)
        break;
    console.log(obj.value);
}

// Generators
function* genIterators(){
    yield "Ram";
    yield 1;
}
const it = genIterators();
console.log(it.next());
console.log(it.next());
console.log(it.next());