//Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    //Local scopre (fahrenheit, celsius)
      //local scope (isFreezing)

let convertFahrenheitToCelsius = function (farenheit){
    let celcius = (farenheit - 32) * 5/9
    if (celcius <= 0) {
        let isFreezing = true
    }
    return celcius 
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)