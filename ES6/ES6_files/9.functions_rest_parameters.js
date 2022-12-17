//ES5
// If we are not sure how many arguments are passed
function AddAll() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    console.log(sum);
}
AddAll(1, 2, 1, 4, 6);

// ES6
// if we know the there is going to be one parameter followed by n number of parameter
function AddAllNumbers(a, ...x) {
    var sum = a;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    console.log(sum);
}
AddAllNumbers(4, 2, 1, 4, 6);