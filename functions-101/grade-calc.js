//student score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-50

const gradeCalc = function (score, possibleScore) {
    const percent = (score/possibleScore) * 100
    let letterGrade = ''
    if (score >= 90) {
        letterGrade = 'A'
    } else if (score >= 80){
         letterGrade = 'B'
    } else if (score >= 70){
         letterGrade = 'C'
    } else if (score >= 60){
         letterGrade = 'D'
    } else {
         letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)! `

}

const yourGrade = gradeCalc(89, 100)
console.log(yourGrade)