let temp = 55

// LogicaL And Operator - True if both sides are true. False if either side is false. 
// Logical Or Operator - True as long as one side is true. False otherwise.


if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out!')
} else if ( temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do what you want')
}

//Chllenge area

let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes.
// At least one vega? Make sure to offer some vegan options.
// Else, offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes.')
} else if (isGuestOneVegan || isGuestTwoVegan ) {
    console.log ('Make sure to offer some vegan options.')
} else {
    console.log('Offer anything on the menu.')
}
