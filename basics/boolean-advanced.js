let isAccountLocked = false
let userRole = 'user'


if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin'){
    console.log('Welcome Admin')
}  else {
    console.log('Welcome')
}

///

let temp = 4

if (temp <= 32) {
    console.log('Its freezing')
} else if (temp >= 110) {
    console.log('its too hot outside')
} else {
    console.log('go for it, its pretty nice outside')
}

