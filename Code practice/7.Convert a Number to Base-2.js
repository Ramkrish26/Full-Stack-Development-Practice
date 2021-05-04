// Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. 
// To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
// https://edabit.com/challenge/3kcrnpHk7krNZdnKK

function binary(decimal) {
	let rem = decimal;
    let quo = decimal;
    let arr = new Array();
    do{
        rem = quo%2;
        quo = Math.floor(quo/2);
        arr.push(rem);
    }while (quo>1);
    arr.push(1);
    return decimal === 0 ? "0" : decimal === 1 ? "1" : arr.reverse().join("");
}

console.log(binary(1));

// let c = 10;
// console.log(c.toString(2));