let myAccount = {
    name: 'DeAndre Boston',
    expenses: 0,
    income: 0,

}

let addExpense = function (account, amount) {
  
    account.expenses = account.expenses + amount

}

//addIncome
let addIncome = function (account, income){
    account.income = account.income + income
}

//resetAccount
let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0

}

//getAcountSummary
let getAccountSummary = function (account){
    let balance = account.income - account.expenses
    return `${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses. `
}
// Account for DeAndre has $900. $1000 in income. $100 in exoenses, 

//addIncome
//addExpense
//addExpense
//getAccountSummary
//resetAccount
//getAccountSummary

addIncome(myAccount, 900)
console.log(myAccount)

addExpense(myAccount, 400)
console.log(myAccount)

addExpense(myAccount, 700)
console.log(myAccount)

let summary = getAccountSummary(myAccount)
console.log(summary)

resetAccount(myAccount)
console.log(myAccount)


let newSummary = getAccountSummary(myAccount)
console.log(newSummary)


