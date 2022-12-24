'use strict';

// Constructor function is a funtion with new keyword
const Person = function (firstName, birthYear) {
    // console.log(this);

    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Instance methods
    // But never do this creating an method inside a constructor function
    // If there are aroung hundreads of methods then this object will carry all the available method
    this.calcAge = function () {
        console.log(2037 - this.birthYear)
    }
}

const ram = new Person('Ram', 1997);
console.log(ram);

// 4 steps happening when a new keyword is used
// 1. New empty object is created {}
// 2. function is called, this keyword is set to the newly created object, this = {}
// 3. {} is linked to a prototype
// 4. function automatically returns {}

console.log(ram instanceof Person) // true