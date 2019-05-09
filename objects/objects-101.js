let myBook = {
    title: '1984', 
    author: 'George Orwell',
    pageCount: 326    
}
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = `Animal Farm`

console.log(`${myBook.title} by ${myBook.author}`)

//challenge area

//name, age, location

let person = {
    name: 'Andres',
    age: 27,
    location: 'Philidelphia'
}
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)