// Computed keys
const key1 = "name";
// const functionaName = "attendance";
function functionName(){
    return "attendance";
};
const obj = {
    [key1] : "Ram",
    [functionName()](x){
        console.log("Present ".repeat(x));
    }
}
obj.attendance(3);
console.log(obj);

// New object methods: assign
Object.assign(obj,{daysPresent : 3});
console.log(obj);