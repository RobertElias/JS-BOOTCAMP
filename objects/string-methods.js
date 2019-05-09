let name = '   Robert Elias'

//Length Property

console.log(name.length)


//Convert to upper case
console.log(name.toUpperCase())

//Convert to lower case
console.log(name.toLowerCase());

//Includes metho
let password = 'abc123tek098'
console.log(password.includes('password'))

//Trimp method
console.log(name.trim());

//Challenge area

//isValidPassword
 let isValidPassword = function (password) {
     return password.length > 8 && !password.includes('password')
 }

//Length is more that 8 - and it doesnt contain the word password

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpasdfpoijpassword'))

