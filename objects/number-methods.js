let num = 56.802311

console.log(num.toFixed(2))

console.log(Math.round(num))

console.log(Math.floor(num))

console.log(Math.ceil(num))


let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// 0 - 9.9999
console.log(randomNum)


//Challenge area
//Range 1-5 - true if correct - false if not correct

let makeGuess = function (guess) {
    
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    
    return guess === randomNum
    
    
}

console.log(makeGuess(1))