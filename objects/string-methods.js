let name = ' DeAndre '

//length Property
console.log(name.length)

//convert to upper case
 console.log(name.toUpperCase())

// convert to lowrer case
console.log(name.toLowerCase())

//inludes method
let password = 'abs123pasnsword098'
console.log(password.includes('password'))

//trim method - remove extra white space
console.log(name.trim())

//challenge

//isValidPassword
//length is more than 8 - and does not contain word assword

let isValidPassword = function (password) {
   return password.length > 8 && !password.includes('password')

}



console.log(isValidPassword('asdfasdf'))
console.log(isValidPassword('dfasdfspassword'))
console.log(isValidPassword('qazzwsxedcr'))