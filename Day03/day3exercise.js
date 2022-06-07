//LEVEL1
//1.
let newFirstName = 'Olawumi'
let lastName = 'Ladele'
let country = 'Nigeria'
let city = 'Lagos'
let age = 100
let newIsMarried = false
let newYear = 2022

console.log(typeof newFirstName) //returns = string
console.log(typeof lastName) //returns = string
console.log(typeof country) //returns = string
console.log(typeof city) //returns = string
console.log(typeof age) //returns = number
console.log(typeof newIsMarried) //returns = boolean
console.log(typeof newYear) //returns = number

//2.
console.log(typeof '10' == 10) // returns = false

//3.
let someNum = '9.8'
let parseSomeNum = parseInt(someNum)
console.log(parseSomeNum == 10) // returns = false 

//4i. all returns= true
console.log(0 == '') 
console.log(5 == '5')
console.log('Wumi'.length >= 'Ola'.length)
 //4ii. all returns = false
console.log(NaN == NaN)
console.log(5 === '5')
console.log('Wumi'.length <= 'Ola'.length)

/* 5.
i. true
ii. true
iii. false
iv. false
v. true
vi. true
vii. false
viii. false
ix. false
x. true
xi. false
xii. false
*/
console.log (4 > 3)
console.log ( 4 >= 3)
console.log ( 4 < 3)
console.log (4 <= 3)
console.log (4 == 4)
console.log (4 === 4)
console.log (4 != 4)
console.log (4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('python'.length > 'jargon'.length)

/* 6.
i. true
ii. false
iii. true
iv. true
v. false
vi. true
vii. true
viii. false
ix. false
x. true
xi. false
*/
let text1 = 'dragon'
let text2 = 'python'
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 < 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 === '4'))
console.log(!(text1.search('on') == text2.search('on')))

//7. (using variables from day3.js)
console.log(year) // returns = 2022
console.log(month) // returns = 6
console.log(date) // returns = 7
console.log(day) // returns = 2
console.log(hours) // returns = 22
console.log(minutes) // returns = 15
console.log(Date.now()) // returns = 1654636715343

//LEVEL 2.
//1.
const base = prompt('breadth of the triangle', 'enter base')
const height = prompt('height of the triangle', 'enter height')
const areaOfTriangle = 0.5 * base * height
let theAreaOfATriangle = `The area of the the triangle is ${areaOfTriangle}`
console.log(theAreaOfATriangle)

//2. 
let a = prompt('side a of triangle', 'enter a')
let convA = parseInt(a)
let b = prompt('side b of triangle', 'enter b')
let convB = parseInt(b)
let c = prompt('side c of triangle', 'enter c')
let convC = parseInt(c)
const perimeterOfTriangle = convA + convB + convC
let trianglePerimeter = `The perimeter of the triangle is ${perimeterOfTriangle}`
console.log(trianglePerimeter)

//3. 
let length = prompt ('length of rectangle', 'enter length')
let convLength = parseInt(length)
let width = prompt ('width of rectangle', 'enter width')
let convWidth = parseInt(width)
const areaOfRect = convLength * convWidth
const perOfRect = 2 * (convLength + convWidth)
let rectangleArea = `The area of the rectangle is ${areaOfRect}`
let rectanglePerimeter = `The perimeter of the rectangle is ${perOfRect}`
console.log(rectangleArea)
console.log(rectanglePerimeter)

//4.
const pi = 3.14
let userRadius = prompt('circle radius', 'enter radius')
let convRadius = parseInt(userRadius)
const areaOfCircle1 = pi * userRadius * userRadius
const perimeterOfCircum = 2 * pi * userRadius
let circleArea = `The area of the circle is ${areaOfCircle1}`
let circleCircumference = `The circumference of the circle is ${perimeterOfCircum}`
console.log(circleArea)
console.log(circleCircumference)


//5.

const slope = y=mx