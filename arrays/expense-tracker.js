const account = {
    name: 'DeAndre Boston',
    expenses: [],
    income: [],
    addExpense: function(description, amount){
        this.expenses.push({description: description, amount: amount})
    },
    addIncome: function(description, amount) {
        this.income.push({description: description, amount: amount})
    },
    getAccountSummary: function(){
        let totalExpenses = 0;
        let incomeTotal = 0;
        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function(money){
            incomeTotal = incomeTotal + money.amount
        })
        
        return `${this.name} has a balance of $${incomeTotal - totalExpenses}. $${incomeTotal} in income. $${totalExpenses} in expenses.`
    }
}

// Expenses -> Desscription, amount
// addExpense -> decription, amount
// getAccountSummary -> total up all expenses -> DeAndre Boston has $1250 in expenses.

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary - DeAndre Boston has a balance of $10. $100 in income. $90 in expenses. 

account.addExpense('Rent', 950)
account.addExpense('Coffee', 6)
account.addIncome('Job,', 1000)
console.log(account.getAccountSummary());