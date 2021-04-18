// ES5
// module.exports = () => {console.log("This is from module")};

let basic = () => {console.log("This is from module")};
module.exports = basic;


module.exports.average = arr =>{
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
};
