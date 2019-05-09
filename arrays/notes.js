// const notes = ['Note 1', 'Note 2', 'Note 3']
// //console.log(notes.pop())

// // //notes.pop()
// // notes.push('My new note')

// // console.log(notes.shift())
// // notes.unshift('My first note')

// //notes.splice(1, 1, 'This is the new 2nd item')

// notes[2] = 'This is now the new note 3'

// notes.forEach(function(items, index) {
//     console.log(index)
//     console.log(items)
// })



// console.log(notes.length)
// console.log(notes)

//console.log(notes[0])

//console.log(notes[notes.length - 2])

// Counting... 1 
// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let count = notes.length - 1; count >=0; count--) {
//     console.log(notes[count])
    
// }

// const notes = [{}, {
//     title: 'My next trip',
//     body: 'I would like to go to Spain.'
// }, {
//     title: 'Habbits to work on ',
//     body: 'Exercise. Eating a bit healthier.'
// },{
//     title: 'Office modification',
//     body: 'Get a new seat.'
// }]

// const findNote = function(notes, noteTitle) {
//     const note = notes.find(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase() 
//     })
//     return notes
// }


// const note = findNote(notes, 'office modification')
// console.log(note)


// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase() 
//     })
//     return notes[index]
// }

// console.log(notes.length)
// console.log(notes)
// const index = notes.findIndex(function(note, index){
//    console.log(note) 
//    return note.title === 'Habbits to work on '
// });
// console.log(index)