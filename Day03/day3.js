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


//Operator precedence