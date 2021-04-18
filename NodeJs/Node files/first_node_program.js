console.log("Hi");

// Process variable - similar to document inside the browser
// console.log(process);

// Command line input
// Run the following command - node <file name> <var1> <var2> ..
// Converting the first letter in the string to uppercase
let modifiedString = (str) => str = str[0].toUpperCase() + str.substring(1);
for (var i =2;i< process.argv.length;i++){
    console.log(`${i} : ${modifiedString(process.argv[i])}`);
}

var a = require("./file_export.js");
a();

var avera = require("./file_export.js").average;
console.log(avera([209,1243,124,5,6]));