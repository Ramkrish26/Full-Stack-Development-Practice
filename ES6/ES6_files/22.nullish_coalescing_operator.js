// Nullish values: null and undefined
// This operator returns the first non nullish values
console.log(0 || 1) // 1
console.log(0 ?? 1) // 0
console.log(null ?? 1) // 1
console.log(undefined ?? 1) // 1
console.log('' ?? 1) //