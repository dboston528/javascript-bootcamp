//multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)

console.log(result)

//default arguments

let getScoreText = function (name = 'Anonymous', score = 0){
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText('DeAndre')
console.log(scoreText)

//challenge area
//totalBill, tipPercent .2
// A 25% tip on $40 would $10

let tip = function (total, tipPercent = .20) {
    let yourTip = total  * tipPercent
    let percent = tipPercent * 100
    return `A ${percent}% tip on $${total} would be $${yourTip.toFixed(2)} `
}

let theTip = tip(34, .15)
console.log(theTip);

