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

//String
let space = ' '
let firstName = 'Olawumi'
let lastName = 'Ladele'
let country = 'Nigeria'
let state = 'Lagos'
let language = 'JavaScript'
let job = 'Assistant Logistics Officer'
let age = '100'
let quote = "I am the 'righteousness' of God 'in Christ Jesus'."
let quoteWithBackTick = `I am the righteousness of God in Christ Jesus.`

let fullName = firstName + space + lastName;
console.log(fullName)

let personalInfoOne = fullName + '. I am ' + age + ' years old' + '. I live in ' + country + '.';
console.log(personalInfoOne)

//Long literal strings
const paragraph = "My name is Olawumi Ladel. I live in Lagos, Nigeria.\
I am a student and I love learning. I learnt HTML and CSS earlier and I am currently learning Javascript.\
Hoping to move to React, Redux, Node.js, Python and the likes soon.\
I am currently working on the 30DaysJavaScript challenge brought together by Asabeneh Yetayeh.\
Today is Day 2 and it's been fun and exciting.\
Hoping to be challenged in this soon."

console.log(paragraph)

//Escape sequnce
// \n: new line
// \t: Tab,
// \\: Back slash
// \': Single quote (')
// \": Double quote (")

console.log('This is a backlash symbol (\\)')
console.log ('My name is Olawumi Ladele. \nBut you can call me Abike.')
console.log('Numbering\t1\t2\t3')
console.log('Numbering\t4\t5\t6')
console.log('Numbering\t7\t8\t9')
console.log('This is how to use a double quotation in JS \"Hello Abike".')
console.log("This is how to use a single quote in a sentence in JS \'Welcome, Abike'.")
console.log("I am the \'righteousness' of God \'in Christ Jesus'.")

/*
Template string syntax
use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign
`String literal text`
`String literal text ${expression}`
*/

console.log('The sum of 4 and 5 is 9.')
let a = 4
let b = 5
console.log(`The sum of ${a} and ${b} is 9.`)
console.log(`${a} is greater than ${b}: ${a > b}`)

let personalInfoTwo = `My name is ${firstName}, I am ${age} years old and I live in ${country}.`
console.log(personalInfoTwo)

/* string method
1. length: The string length method returns the number of characters in a string included empty space.
*/

let js = 'JavaScript'
let nul = ''
console.log(js.length)  //output = 10
console.log(firstName.length) //output = 7
console.log(nul.length)

// 2. Accessing characters in a string using its index. The count starts from zero
//using js = 'JavaScript' in example 1
let firstLetter =js[0]
let secondLetter = js[1]
let thirdLetter = js[2]
let lastLetter = js[9]
let lastIndex = js.length - 1

console.log(firstLetter, secondLetter, thirdLetter, lastLetter) //J a v t
console.log(lastIndex) // 9
console.log(js[lastIndex]) // t

//3. toUpperCase() is used to change string to uppercase lettters.
//using js = 'JavaScript' in example 1
console.log(js.toUpperCase()) // output = JAVASCRIPT
console.log(firstName.toUpperCase()) // ouput = OLAWUMI
console.log(country.toUpperCase()) // ouput = NIGERIA

//4. toLowerCase() is used to change string to lowercase lettters.
//using js = 'JavaScript' in example 1
console.log(js.toLowerCase()) // output = javascript
console.log(firstName.toLowerCase()) // output = olawumi
console.log(country.toLowerCase()) // output = nigeria

//5. substr() takes two arguments, the starting index and number of characters to slice.
//using js = 'JavaScript' in example 1
console.log(js.substr(2,6)) // output = vaScri
console.log(country.substr(3,6)) // output = eria

//6. substring() takes two arguments, the starting index and the stopping index without including the character of the stopping index.
//using js = 'JavaScript' in example 1
console.log(js.substring(0,4)) // output = Java
console.log(job.substring(4,12)) // output = stant lo

//7. split() splits string at a specified point.
console.log(job.split()) // changes to an array ['Assistant Logistics Officer']
console.log(job.split(" ")) // splits to an array at each space ['Assistant', 'Logistics', 'Officer']
console.log(firstName.split()) // output = ['Olawumi']
console.log(firstName.split(''))

let countries = 'Nigeria, Ghana, Egypt, South Africa and Benin.'
console.log(countries.split()) // output = ['Nigeria, Ghana, Egypt, South Africa and Benin.']
console.log(countries.split(' ')) // output = ['Nigeria', 'Ghana', 'Egypt', 'South Africa', 'and', 'Benin']
console.log(countries.split('')) // output  ['N', 'i', 'g', 'e', 'r', 'i', 'a', ',', ' ', 'G', 'h', 'a', 'n', 'a', ',', ' ', 'E', 'g', 'y', 'p', 't', ',', ' ', 'S', 'o', 'u', 't', 'h', ' ', 'A', 'f', 'r', 'i', 'c', 'a', ' ', 'a', 'n', 'd', ' ', 'B', 'e', 'n', 'i', 'n', '.']

//8. Trim() is used to remove trailing spaces in the beginning or the end of a word.
let newJob = ' Medical Practitioner '
console.log(newJob) // output =  Medical Practitioner
console.log(newJob.trim(' '))  // output = Medical Practitioner

//9. includes() takes a substring argument abd checks if th substring argument xists in the string. It returns a boolean value.
