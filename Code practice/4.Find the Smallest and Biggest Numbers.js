// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// https://edabit.com/challenge/Q3n42rEWanZSTmsJm

function minMax(arr) {
	return [Math.min.apply(Math,arr),Math.max.apply(Math,arr)];
}
console.log(minMax([2,3,4,5]));