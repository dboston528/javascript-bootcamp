//lexical Scope (Static Scope)
//Global scope - Everthing defined outside of all code blocks
//Local scope - Defined inside a code block

// In a scope you can access variables defoned in that scope, or in any parent/acestor scope

//Scope tree example
//Global Scope (varOne)
    // Local Scope (varTwo)
        // Local Scope (varFour)
    // Local Scope (varThree)


let varOne = 'varOne'

if (true){
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo) //Output: varTwo

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = "varThree"

}

console.log(varTwo)
