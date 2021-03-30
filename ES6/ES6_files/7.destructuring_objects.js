const details = { name: "Ram", ID: 1 };
// const { name: n, ID: i } = details;
// Below is similar to the above. Should use the same key
const { name, ID } = details;
console.log(name, ID);

//Deep matching
const person = { name: "Ram", address : {city: "Chennai", state: "Tamil Nadu"}};
const { name: na, address:{city:c, state:s} } = person;
console.log(na, c, s);