// //Create an array with five todos
// const todo = ['Make Coffee', 'Drink Coffee', 'Learn JavaScript',
// 'Take a break', 'Walk the dog']
// //delete the 3rd item
// todo.splice(2, 1)
// //Add a new item onto the end
// todo.push('Learning Javascript')
// //Remove first item from the list
// todo.shift()




// console.log(`You have ${todo.length} todos!`)


// todo.forEach(function(todo, index){
//     const num = index + 1
//     console.log(`${num}.${todo}`)
  
// })

// for (let count = 0; count < todo.length; count++) {
//     const num = count + 1
//     const todos = todo[count]
//     console.log(`${num}. ${todos}`)    
// }
//console.log(todo)
//console.log(todo[todo.length - 1], todo[todo.length - 2])
// console.log(`Todo: ${todo[0]}`)
// console.log(`Todo: ${todo[todo.length -2]}`)

//you have x todos
//print the first and second to last items -> Todo: Walk the dog


const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]
const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase() 
    })
    if (index  -1) {
        todos.splice(index, 1)
    }
}
//1. Convert array to array of objects -> text, completed
//2. Created function to remove a todo by text value

deleteTodo(todos, 'buy food')
console.log(todos)