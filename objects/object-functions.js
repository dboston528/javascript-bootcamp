let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326

}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723

}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCount: book.pageCount
    }
} 

let bookSummary = getSummary(myBook)
let otherBookSummary =  getSummary(otherBook)


console.log(bookSummary.summary)
console.log(otherBookSummary.summary)

//challenge area
//create function - take farenheight in - return object with all three.  

let getTemps = function (fahrenheit) {
    let celsiusTemp = (fahrenheit - 32) * 5/9
    let kelvinTemp =  (fahrenheit + 459.67) * 5 / 9
    return {
        fahrenheit: fahrenheit,
        celcius: celsiusTemp,
        kelvin: kelvinTemp
    }
}

let currentTemp = getTemps(74)
console.log(currentTemp)