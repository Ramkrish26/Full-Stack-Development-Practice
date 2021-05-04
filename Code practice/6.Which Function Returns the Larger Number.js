// Your function will be passed two functions, f and g, that don't take any parameters.
// Your function has to call them, and return a string which indicates which function returned the larger number.
// https://edabit.com/challenge/o7TwicAHWuMkjbDqQ

function whichIsLarger(f, g) {
    if(f()===g()) return "neither";
	return f()>g() ? "f" : "g";
}