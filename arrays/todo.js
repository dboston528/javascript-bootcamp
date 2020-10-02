const todo =  ['Create video', 'Cook breakfast', 'Walk dog', 'Take shower', 'Wash clothes']

// Delete the third item
// Add a new item to the end
// remove the first item the list

todo.splice(2,1)
todo.push('Update website')
todo.shift();

console.log(`You have ${todo.length} todos!`)
todo.forEach(function(item, index){
    const number = index + 1
    console.log( `${number}. ${item}`)

})

