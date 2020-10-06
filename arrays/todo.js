const todo =  [{
    text:'Create video', 
    completed: false
}, {
    text: 'Cook breakfast',
    completed: true 
}, {
    text: 'Walk dog',
    completed: false
}, {
    text: 'Take Shower',
    completed: false
}, {
    text: 'Wash Clothes',
    completed: false
},]

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

const deleteTodo = function (todoList, text ) {
    const arrayIndex =  todoList.findIndex(function (todo, index) {
        
        return todo.text.toLowerCase() === text.toLowerCase()
        
    })
    if (arrayIndex > -1) todoList.splice(arrayIndex, 1);
}

const getThingsToDo = function (todoList) {
    return todoList.filter(function (todo) {
        return !todo.completed
    })

}

console.log(getThingsToDo(todo))

// deleteTodo(todo, 'walk dog')
// console.log(todo)