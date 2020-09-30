
const notes = ['Note 1', 'Note 2', 'Note 3']

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


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
console.log(notes)