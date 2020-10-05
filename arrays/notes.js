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

const findNote = function(notes, noteTitle) {
    return notes.find(function (note, index){
        // return note.title === noteTitle
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function (note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'office modification')
console.log(note)
