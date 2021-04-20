// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step.
// https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
function matchHouses(step) {
    if(step===0) return 0;
	return (step*5)+1;
}