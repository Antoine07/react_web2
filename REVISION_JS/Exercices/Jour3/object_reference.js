

const inititialState = {count : 0, step : 1, message: ""}
const a = inititialState;

a.count = 10
console.log(a)
console.log(inititialState)

const inititialStateNewCopy = { ...inititialState } // nouvelle référence
inititialStateNewCopy.count = 100
console.log(inititialStateNewCopy)
console.log(inititialState) // ne change pas 

console.log({ ...inititialStateNewCopy, step : 3})

