const score = {
    "English": 10,
    "Tamil": 10,
    calculate() {
        return 10 + 10
    }
}
const obj1 = {
    "name": "Ram",
    "ID": 1,
    score
}

// Optional chaining returns undefined if a property is missing rather than throwing error
// console.log(obj1.scores.English) // Uncaught type error as scores property is not present

// Will check for the English property only if scores property is present else will return undefined
console.log(obj1.scores?.English ?? "No such property") // No such property
console.log(obj1.score?.English ?? "No such property") // 10

// Optional chaining in methods will call the method only if the method is present
console.log(obj1.score.calculate()) // 20
// console.log(obj1.score.calculates()) // Uncaught type error as this method is not present
console.log(obj1.score.calculates?.()) // Undefined
