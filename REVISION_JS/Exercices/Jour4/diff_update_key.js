
const name = "NAME"
const value = "Alice"

const student = {
    NAME : "",
} 

const newStudent = { ...student, name : value}

console.log(newStudent)
console.log({ ...student, [name] : value})
