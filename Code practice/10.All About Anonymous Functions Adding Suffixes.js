// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
// https://edabit.com/challenge/Ra85gzkCTtXrNyCag

function add_suffix(suffix) {
	return (word) => word+suffix;
}
//  let add_ly = add_suffix("ly");
// console.log(add_ly("Ram"));
 console.log(add_suffix("ly")("Ram"));