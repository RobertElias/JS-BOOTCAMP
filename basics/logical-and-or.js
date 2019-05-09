let temp = 55

// logical And && operator -True if both sides are True. False otherwise
// logical Or || operator - True if atleast one side is True

if (temp>=60 && temp <= 90) {
    console.log('it is pretty nice outside!!')
    
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('do what you want')
}

//Challenge area

let isGuestOneVegan = false
let isGuestTwoVegan = false

// are both vegan? offer only vegan
// atleast one vegan? Make sure to offer up some vegan option
// else offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('offer only vegan options!!')
    
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log(' Make sure to offer up some vegan option')
} else {
    console.log('offer up anything on the menu')
}