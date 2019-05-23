
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain.'
}, {
    title: 'Habbits to work on ',
    body: 'Exercise. Eating a bit healthier.'
},{
    title: 'Office modification',
    body: 'Get a new seat.'
}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.totalLowerCase)
    })
    
    filteredNotes.forEach(function(note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('body').appendChild(noteEl)
    })
}

renderNotes(notes, filters)
document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

//--Single--
//p
//#replace
//.item


//--Multiple--
//button.inventory
//.h1.title.application
//.h1.application#title
