//NUMBERS - Math objects
const pi = Math.PI
console.log(pi)

//Round off
console.log(Math.round(pi))  //to round up to nearest whole number. Answer = 3
console.log(Math.round(9.81)) // Answer = 10
console.log(Math.floor(pi)) //to round down. Answer = 3
console.log(Math.ceil(pi)) // to round up. Answer = 4
console.log(Math.min(-3, 3, 0, -10, 20, 4, 10)) //to determine the smallest number. Answer = -10
console.log(Math.max(-3, 3, 0, -10, 20, 4, 10)) // to determine the largest number. Answer = 20

//Random Number Generator
const randNum = Math.random() // creates a random number between 0 to 0.9999...
console.log(randNum)

const num = (Math.random() * 11) // creates a random number between 0 to 10
console.log(num)

let randomNum = Math.random()
let numBtwZeroAndTen = randomNum * 11
console.log(numBtwZeroAndTen)

let randomNumRoundToFloor = Math.floor(numBtwZeroAndTen)
console.log(randomNumRoundToFloor)

let randomNumRoundToCeil = Math.ceil(numBtwZeroAndTen)
console.log(randomNumRoundToCeil)

//for absolute value. 
console.log(Math.abs(-15)) //Answer = 15

//for Square root.
console.log(Math.sqrt(144)) //Answer = 12
console.log(Math.sqrt(5)) //Answer = 2.23606797749979

//for power
console.log(Math.pow(2,5)) // 32
console.log(Math.E) // 2.718281828459045

//Logarithm
//Math.log(x) = returns the natural logarithm with base E of x
console.log(Math.log(2)) // 0.6931471805599453
console.log(Math.log(10)) // 2.302585092994046

//Math.LNx = returns the natural logarithm of x
console.log(Math.LN2) // 0.6931471805599453
console.log(Math.LN10) // 2.302585092994046

//Trigonomtry
console.log(Math.sin(0)) // 0
console.log(Math.cos(60)) // -0.9524129804151563
console.log(Math.tan(45)) // 1.6197751905438615