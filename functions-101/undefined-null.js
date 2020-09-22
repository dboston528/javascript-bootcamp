//undefined for variable
let name

name = 'jen'
if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undefined for function arguments
// Undefined as a function return default value
let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

//null as an asigned valeue
let age = 27
age = null
console.log(age)
