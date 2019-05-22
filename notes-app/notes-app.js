
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

document.querySelector('button').addEventListener('click', function (e){
    console.log('Did this work?')
    console.log(e)
})
