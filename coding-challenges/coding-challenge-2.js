"use strict";

let temp = [12, 5, -5, 0, 4]

function printForecast(temperature) {
    let forecast = "... ";
    for (let i = 0; i < temperature.length; i++) {
        forecast += `${temperature[i]}C in ${i + 1} days ... `
    }
    console.log(forecast);
}

printForecast(temp);