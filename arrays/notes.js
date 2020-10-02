//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const notes = [{
    title: "My Next Trip",
    body: "I would like to go to spain"
},{
    title: "Habits to work on",
    body: "Excersise. Eating a bit better."

},{
    title: 'Office modification',
    body: 'Get a new seat'   

}]

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1,0, 'This is the new seond item')

notes[2] = 'This is the new note 3'
notes.forEach(function (item, index){
    console.log(index)
    console.log(item)
})

console.log(notes)

console.log(notes.indexOf('Not3'))