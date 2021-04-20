// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
// https://edabit.com/challenge/pB6CF3rFBi8ykJ3Br

function shiftToLeft(x, y) {    
	return x* Math.pow(2,y);
}