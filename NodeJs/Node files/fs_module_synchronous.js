// File system module
const fs = require("fs");
const sampleFile = "../files/sample.txt";
const newFile = "../files/newFile.txt";

// check if files exists
fs.existsSync(sampleFile);
console.log(fs.existsSync(sampleFile));

// Reading the file
const data = fs.readFileSync(sampleFile,"utf-8");
console.log(data);

// To create file is doesnt exist or will override the contents already
fs.writeFileSync(newFile,"New file created using fs now overridden");

// To append some content
fs.appendFileSync(newFile,"\n New content appended");