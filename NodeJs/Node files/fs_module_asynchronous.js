const fs = require("fs");
const sampleFile = "../files/sample.txt";
const newFile = "../files/newFile.txt";

// Check if file exists
fs.stat(sampleFile, err => {
    console.log(err);
});

// Change permisions of the file
fs.chmod(sampleFile, 0777, err => {
    console.log(err);
});

// TO check user permission of the file
fs.access(sampleFile, fs.constants.W_OK,err => {
    console.log(err);
});

// Read, write and append
fs.writeFile(newFile, "Asynchronous way", err => {
    if(err)
        console.log(err);
    else {
        fs.readFile(newFile, "utf-8", (err,data) => {
            if(err)
                console.log(err);
            else 
                console.log(`Content of ${newFile} : ${data}`);
        })
    }
});

// Delete a file
fs.unlink(newFile, err => {
    console.log(`Error : ${err}`);
});