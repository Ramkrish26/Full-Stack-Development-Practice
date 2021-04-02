let arr = [1,2,3,,4,7,9];

// find the first element greateer than 6
// First element that satifies the condition will be returned
console.log(arr.find((val) => val > 6));
console.log(arr.findIndex((val) => val > 6)); // To find the index of the element that satisfies the condition

console.log(arr.findIndex((val , id) => val+id >  6));

// To get the index of a value
console.log(arr.indexOf(1));

// To verify if the value is present insside an array
console.log(arr.includes(1));

// TO copy a chunck of values in an array into an index 
console.log(arr);
console.log(arr.copyWithin(1, 0 , 3)); // Copy the values from index 0 to 3 (3 not included) in the position 1

console.log(arr.copyWithin(3)); // Will copy from first value till the last value in the position mentioned

// TO fill the specified value at a position in an array
console.log(arr.fill(4,0, 1));