'use strict';

const request = fetch('https://restcountries.com/v3.1/name/peru')
console.log(request);

// Consuming promises. fetch returns a promise
const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            // json() method also returns a promise
            return response.json()
        })
        .then(data => console.log(data))
        .catch(err => console.log(`${err} thrown`));
}

getCountryData('peru')