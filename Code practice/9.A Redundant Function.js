// Write a function redundant that takes in a string str and returns a function that returns str.
// https://edabit.com/challenge/hzxN9bAebBPNqdQto

function redundant(str) {
    let result = ()=>{
        return str;
    };
    return result;
}

console.log(redundant("Ram")());