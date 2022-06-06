// Boolean - returns either true or false during comparison operators.
// Truthy value - All numbers positive or negative are truthy except zero, all strings are truthy excepty an empty string (''), the boolean true is truthy
// Falsy values - zero, on, null, undefined, NaN, the boolean false, (''),(""),(``), empty strings

// Undefined - is returned when one declares a variable without assigning a value to it. Also, if a function is not assigned a (returning the) value, it returns undefined.

let firstName
console.log(firstName) // returns = undefined.


//Null - means no value
let empty = null
console.log(empty) // returns = null

//Operators
//Assignment operators - is used to assign a variable. The equal sign (=) is an assignment operator in JavaScript
//\Asabeneh\30-Days-Of-JavaScript\blob\master\images\assignment_operators.png

//Arithmetic operators - mathematical operators
// addition, + = a + b
// subtraction, - = a- b
// multiplication, * = a * b
// dividion, / = a/b
// modulus, % = a % b
// exponential, ** = a ** b

let numOne = 9
let numTwo = 6
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne - numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo
console.log(sum, diff, mult, div, remainder, powerOf) // returns = 15 3 54 3 3 531441

//calculating the area of a circle,
const PI = 3.14
let radius = 50  //length in meters
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle) // returns = 7850

//calculating the weight of an object
const gravity = 9.81 // in m/s2
let mass = 92 // in kg
const weight = mass * gravity
console.log(weight) // returns = 902.5200000000001 in Netwon or kgm/s2

const boilingPoint = 100 // boiling point of water in degree celcius
const bodyTemp = 37 // body temperature in degree celcius

/* 
concatenating string with numbers using string interpolation
The boiling point of water is 100 degree celcius.
Human body temperature is 37 bdegree celcius.
The gravity of the earth is 9.81 m/s2.
*/

console.log(`The boiling point of water is ${boilingPoint} degree celcius.\nHuman body temperature is ${bodyTemp} degree celcius.\nThe gravity of the earth is ${gravity} m/s2.`)

//Comparison operators \Asabeneh\30-Days-Of-JavaScript\blob\master\images\comparison_operators.png
/*
== equal in value only i.e equivalent eg; x == y
=== eual in valu and data type i.e exactly equal eg; x === y
!= not equal eg; x != y
> greater than eg; x > y
< less than eg; x < y
>= greater than or equals to eg; x >= y
<= less than or equals to rg; x <= y
As rule of thumb, if a value is not true with == it will not be equal with ===. Using === is safer than using ==.
*/
console.log(7 > 5) //returns true
console.log(7 >= 5) //returns true
console.log(7 < 5) //returns false
console.log(5 < 7) //returns true
console.log(5 <= 7) //returns true
console.log(7 == 5) //returns false
console.log(7 != 5) //returns true
console.log(7 == '7') //returns true, compares value
console.log(7 === '7') //returns false, compares both value and data type
console.log(7 !== '7') //returns true, compares both value and data type
console.log(7 != 7) //returns false, compares value
console.log(7 !== 7) //returns false, compares both value and data type
console.log(0 == false) //returns true, equivalent
console.log(0 === false) //returns false, not exactly the same
console.log(0 == '') //returns true, equivalent
console.log(0 == ' ') //returns true, equivalent
console.log(0 === '') //returns false, not exactly the same
console.log(1 == true) //returns true, equivalent
console.log(1 === true) //returns false, not exactly the same
console.log(undefined = null) //returns true
console.log(undefined === null) //returns false
console.log(NaN == NaN) //returns false, not equal
console.log(NaN === NaN) //returns false
console.log(typeof NaN) //returns number

console.log('mango'.length == 'avocado'.length) // returns false
console.log('mango'.length != 'avocado'.length )// returns true
console.log('mango'.length < 'avocado'.length) // returns true
console.log('milk'.length == 'meat'.length) // returns true
console.log('milk'.length != 'meat'.length) // returns false
console.log('tomato'.length == 'potato'.length) // returns true
console.log('python'.length > 'dragon'.length) // returns false

//logical operators  include ampersand, &&, pipe, ||, negation,! 
//&& gets true only if two operands are true.
//|| gets true if either of the operand is true
//! negates true to false and false to true.

const check = 7 > 4 && 10 > 5 //returns true
const check1 = 7 > 4 && 10 < 5 //returns false
const check2 = 7 < 4 && 10 < 5 //returns false
const check3 = 7 > 4 || 10 > 5 //returns true
const check4 = 7 > 4 || 10 < 5 //returns true
const check5 = 7 < 3 || 10 < 5 //returns false
let check6 = 7 > 4 //returns true
let check7 = !(7 > 4) //returns false
let isLightOn = true  
let isLightOff = !isLightOn //returns false
let isMarried = !false //returns true

//Increment operator - in JS, the increment operator is used to increase a value stored in a variable. This can be pre or pose increment.
//Pre increment
let count = 0
console.log(count) //returns 0
console.log(++count) //returns 1
console.log(count) //returns 1

//Post Increment is mostly used
let count1 = 0
console.log(count1) //returns 0
console.log(count1++) //returns 0 
console.log(count1) //returns 1

//Decrement operator - in JS, the decrement operator is used to reduce a value stored in a variable. Thic can b epre or post decrement.
//Pre decrement
let count2 = 0
console.log(count2) //returns 0
console.log(--count2) //returns -1
console.log(count2) //returns -1

//Post Decrement
let count3 = 0
console.log(count3) //returns 0
console.log(count3--) //returns 0
console.log(count3) //returns -1

//Tenary operators - is used to write a condition.

let isRaining = true
isRaining 
    ? console.log('You need an umbrella') //returns this since isRaining is said to be true
    : console.log('No need for the umrella') 

isRaining = false
isRaining
    ? console.log('You need a raincoat')
    : console.log('No need for a raincoat') //returns this since isRaining is said to be false

let number = 5
number > 0
    ? console.log(`${number} is a positive number`) //returns 5 is a positive number
    : console.log(`${number} is a negative number`)

number = -5
number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`) //returns -5 is a negative number


//Operator precedence - determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.
console.log(3 + 4 * 5) // returns = 23
console.log(4 * 3 ** 2) // returns = 36
console.log(4 + (3 * 2)) // returns = 10 because parentheses here are superfluous
console.log((6 + 6) * 3) // returns = 36 because parantheses changes the order

//Window methods
//Windows alert() method - is an builtin method and it displays an alert box with a spcified message and an ok button. Do not use too much alert because it is destructing and annoying, use it just to test.
//syntax === alert('message')
//alert('Welcome to My 30DaysOfJavaScript Challenge')

//Window prompt() method - displays a prompt box with an input on the browser to tak einput vslue and the input data can be stored in a variable. It takes two arguments with the second argument being optional.
//syntax === prompt('required text', 'optional text')

//let theNumber = prompt('Enter number', 'your number goes here')
console.log('newNumber')

//Window confirm() method - displays a dialog box with a specified message, along with an Ok and a cancel button. It is often used to ask permission from a user to execute something. It takes a string as an argument; clicking the Ok yields true value, whereas clicking the cancel button yields false value.

//const agree = confirm ('Are you sure you want to delete this?')
console.log('agree')

//Date Object
//The method used to get a date and time information on JS starts with the word get because it provides the information.
//getFullYear() - gets the yeear as a four digit number (yyyy)
//getMonth() - gets the month as a number (0-11)
//getDate() - gets the day as a number (1 -31)
//getDay() . gets the weekday as a number (0-6)
//getHours() - gets the hour (0-23)
//getMinutes() - gets the minutes (0-59)
//getSeconds() - gets the secoond (0-59) 
//getMilliseconds() - gets the millisecond (0-999)
//getTime() - gets the time (millisconds since January 1, 1970).
//\Asabeneh\30-Days-Of-JavaScript\blob\master\images\date_time_object.png
//creating a time object
const newNow = new Date()
console.log(newNow) // returns = Mon Jun 06 2022 23:19:37 GMT+0100 (West Africa Standard Time)

//getting the full from a time object
const aNewNow = new Date ()
console.log(aNewNow.getFullYear()) // returns = 2022

//getting the month from a time object
const anotherNewNow = new Date ()
console.log(anotherNewNow.getMonth()) // returns = 5 because the month is June

//getting the day of the month from a time object
const aNewNow1 = new Date ()
console.log(aNewNow1.getDate()) //returns = 6 'cos day of the month is 6th

//getting the day of the week from a time object
const aNewNow2 = new Date ()
console.log(aNewNow2.getDay()) //returns = 1 'cos of the week is Monday

//getting the hour from a time object
const aNewNow3 = new Date ()
console.log(aNewNow3.getHours()) // returns = 23 'cos it's 11pm

//getting the minutes from a time object
const aNewNow4 = new Date()
console.log(aNewNow4.getMinutes()) //returns = 58

//getting the seconds from the time object
const aNewNow5 = new Date()
console.log(aNewNow5.getSeconds()) //returns = 50

//geting time - this method gives time in milliseconds from January 1, 1970. It is also known as Unix time. This can be gotten in two ways;
//1. using getTime()
const aNewNow6 = new Date()
console.log(aNewNow6.getTime()) //returns = 1654556566774

//2. using Date.now()
const allSeconds = Date.now()
console.log(allSeconds) //returns = 1654556672064

//formating this values to a human readable time format. Example
const nNow = new Date()
const year = nNow.getFullYear()
const month = nNow.getMonth() + 1
const date = nNow.getDate()
const hours = nNow.getHours()
const minutes = nNow.getMinutes()
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) //returns = 7/6/2022 0:13