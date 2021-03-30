// {

//     function greet() {
//         console.log("Hi");
//     }

//     greet();

//     {
//         function greet() {
//             console.log("Hello");
//         }
//         greet();
//     }

//     greet();
// }

//If the function call has functions definition preceeding it, priority is given to the blocks
// function greet() {
//     console.log("Hi");
// }

// greet();

// {
//     function greet() {
//         console.log("Hello");
//     }
//     greet();
// }

// greet();

//If we use let for function declaration then the scope will be like block scope
// console.log("Function block scope")
// let greet = function() {
//     console.log("Hi");
// }

// greet();

// {
//     let greet = function() {
//         console.log("Hello");
//     }
//     greet();
// }

// greet();

// Default parameter values
// ES5
function add(a, b) {
    // return (b == undefined ? a+1 : a+b);
    return a + (b == undefined ? 1 : b);
}
console.log(add(5, 6));
console.log(add(5));

// ES6 
let sum = (x, y=1) => x + y;
console.log(sum(5, 6));
console.log(sum(5));