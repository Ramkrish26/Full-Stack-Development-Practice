// Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument,
// and returns the sum of the "base number" and the new argument.
// https://edabit.com/challenge/ENWFBL4jbTgLbSqwS

const makePlusFunction = baseNum => num => baseNum+num;

const plusFive = makePlusFunction(5);
console.log(plusFive(10));

const plusTen = makePlusFunction(10);
console.log(plusTen(10));