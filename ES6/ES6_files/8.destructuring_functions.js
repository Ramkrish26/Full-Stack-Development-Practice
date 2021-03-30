//ES5
function f(arr) {
    console.log("Hello " + arr[0] + " " + arr[1] + " !");
}
f(["Ram", "Krish"])

//ES6
function g([firstName, lastName]){
    console.log(`Hello ${firstName} ${lastName} !`);
}
g(["Ramakrishnan", "Rajaram"])