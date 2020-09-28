let num= 103.941

console.log(num.toFixed(10))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


let min = 0;
let max = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// 0 - .99999
console.log(randomNum)


// Challenge
// 1-5 - true if correc - false it not correct
let makeGuess = function (guess){
    let min = 1
    let max = 5
    let randomNumber =  Math.floor(Math.random() * (max - min +1)) + min
    return randomNumber === guess
}

console.log(makeGuess(1))
