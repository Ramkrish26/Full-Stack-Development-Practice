// Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. 
// Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
// https://edabit.com/challenge/hPWnaSckJke5FXNEH
function timeForMilkAndCookies(date) {
	return date.getMonth()===11 && date.getDate() === 24 ? true : false;
}
console.log(timeForMilkAndCookies(new Date('December 20, 69 00:20:18')));