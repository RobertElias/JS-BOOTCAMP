let add = function (a, b, c) {
    return a + b +c
    
}

let result = add(10,1,5)
console.log(result)

//Default arguments

// let getScoreText = function(name = 'Anonymous', score = 0){
    
//     //return 'Name: ' + name + ' - Score: ' + score
 
// }

// let scoreText = getScoreText(undefined, 99)
// console.log(scoreText)

// Challenge area

// function getTip, total, tipPercent 100* .2 = 20%

//call the function for different tips

// let getTip = function (total, tipPercent = .20) {
// return total * tipPercent

// }

// let tip = getTip(40, .25)
// console.log(tip)

// let name = 'Elias'
// let age = 42
// console.log(`Hey, my name is: ${name}! I am ${age} years of age. `)

let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ${name} - Score: ${score}'
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


// 25% tip on $40 would be $10
let getTip = function (total, tipPercent = .25) {
    let percent = tipPercent * 100
    let tip =  total * tipPercent
    return 'A ${percent}% tip on $${total} would be $${tip}'
    }
    
    let tip = getTip(40, .25)
    console.log(tip)