//Lexical Scoping (Static Scoping) 
//Global Scope - Defines outside all code blocks
//Local Scope - Defined inside code block

//In a scope you can access variables defined in that scope or in any
//parent/ancestor Scope

//Global Scope (varOne)
    //Local Scope(varTwo) 

let varOne = 'varOne' //Global

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo' //Local Scope
    console.log(varTwo)
    
    if (true) {
        let varFour = 'varFour'

    }

}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)
