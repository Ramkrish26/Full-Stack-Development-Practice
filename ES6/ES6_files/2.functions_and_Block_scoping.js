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
console.log("Function block scope")
let greet = function() {
    console.log("Hi");
}

greet();

{
    let greet = function() {
        console.log("Hello");
    }
    greet();
}

greet();
