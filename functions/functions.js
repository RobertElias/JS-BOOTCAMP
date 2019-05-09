//Function - input(argument), code, output (return value)

let greetUser = function () {

    console.log('Welcome User!')
    
}

greetUser()
greetUser()
greetUser()

let square = function (num){
    let result = num * num
    return result 
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// challenge Area

//convertFahrenheitToCelsius

//call a couple of time (32 -> 0) (68-> 20)

//Print the converted values

let convertFahrenheitToCelsius = function (farenheit){
    let celcius = (farenheit - 32) * 5/9
    return celcius 
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)