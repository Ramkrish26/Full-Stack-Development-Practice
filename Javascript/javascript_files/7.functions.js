'use strict';

// Function declaration
function logger(){
    console.log('My name is JS')
}

logger();

function fruitProcessor(apples, oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const juices = fruitProcessor(5,1)
console.log(juices)

// Anonymous function or Function expression
const calcAge = function(birthYear){
    return 2037 - birthYear;
}
const age = calcAge(1997);
console.log(age);
