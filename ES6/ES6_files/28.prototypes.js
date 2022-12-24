// Each and every functions in JS has a prototype

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

console.log(Person.prototype);

// Setting a method to a prototype
Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear)
}

const ram = new Person('Ram', 1997);
ram.calcAge();