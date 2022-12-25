// 'use strict';

// // Consuming promises
// const request = fetch('https://restcountries.com/v3.1/name/peru')
// console.log(request);

// // Consuming promises. fetch returns a promise
// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(function (response) {
//             // json() method also returns a promise
//             return response.json()
//         })
//         .then(data => console.log(data))
//         .catch(err => console.log(`${err} thrown`));
// }

// getCountryData('peru')

// Creating a promise
const lotteryPromise = new Promise(function (resolve, reject) {
    if (Math.random() >= 0.5)
        resolve('You won');
    else
        reject('You lost');
})

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Resolve a promise immediately
Promise.resolve('abc').then(res => console.log(res));