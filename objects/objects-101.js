let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: '326'

}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//challenge name, age, location
// DeAndre is 31 and lives in Lansing. 

let person =  {
    name: 'DeAndre',
    age: '31',
    location: 'Lansing'

}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age ++

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
