'use strict';

const calcAge = birth => 2037-birth;

const age = calcAge(1997);
console.log(age);

const yearsUntilRetirement = birthYear => {
    const age1 = 2037-birthYear;
    const retirement = 65 - age1;
    return retirement;
}
console.log(yearsUntilRetirement(1997));
