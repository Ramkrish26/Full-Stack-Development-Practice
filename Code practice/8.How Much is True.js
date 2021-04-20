// Create a function which returns the number of true values there are in an array.
// https://edabit.com/challenge/GLbuMfTtDWwDv2F73

function countTrue(arr) {
	 return arr.length === 0 ? 0 : (arr.filter(x => x)).length;
}

console.log(countTrue([true, false, false, true, false]));