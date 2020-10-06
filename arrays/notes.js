//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const notes = [{
    title: "My Next Trip",
    body: "I would like to go to spain"
},{
    title: "Habits to work on",
    body: "Excersise. Eating a bit better."

},{
    title: 'Office modification',
    body: 'Get a new chair'   

}]



const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function(notes, noteTitle) {
    return notes.find(function (note, index){
        // return note.title === noteTitle
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })

}



// console.log(findNotes(notes, 'work'))
// const note = findNote(notes, 'office modification')
// console.log(note)

sortNotes(notes)
console.log(notes)
