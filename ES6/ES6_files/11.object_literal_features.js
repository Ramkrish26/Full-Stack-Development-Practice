// Computed keys
const key1 = "name";
// const functionaName = "attendance";
function functionName() {
    return "attendance";
};
const obj = {
    [key1]: "Ram",
    [functionName()](x) {
        console.log("Present ".repeat(x));
    }
}
obj.attendance(3);
console.log(obj);

// New object methods: assign
Object.assign(obj, { daysPresent: 3 });
console.log(obj);

// Advanced Object literals
const score = {
    "English": 10,
    "Tamil": 10,
    // Old syntax to create a function property
    // calculate: function () {
    //     return 10 + 10
    // }

    //Enhanced Syntax t create  function property
    calculate() {
        return 10 + 10
    }
}
const obj1 = {
    "name": "Ram",
    "ID": 1,
    //old way to assign a object inside a object
    //score:score,
    //ES6 enhanced object literals to assign a object inside a object
    score
}
console.log(obj1);