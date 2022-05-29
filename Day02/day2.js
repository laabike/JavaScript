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

//8. trim() is used to remove trailing spaces in the beginning or the end of a word.
let newJob = ' Medical Practitioner '
console.log(newJob) // output =  Medical Practitioner
console.log(newJob.trim(' '))  // output = Medical Practitioner

//9. includes() takes a substring argument abd checks if the substring argument exists in the string. It returns a boolean value.
console.log(job.includes('assistant')) //output = false
console.log(job.includes('Logistics')) // output = true
console.log(newJob.includes('Medical')) // output = true
console.log(newJob.includes('practitioner')) // output =false


//10. replace() takes old substring and the new substrings as parameter.
//syntax === variableName.replace('oldsubstring',' newaubstring')

let aJob = 'Medical Practitioner'
let aCountry = 'Greenland'
console.log(aJob.replace('Practitioner', 'Doctor')) // output = Medical Doctor
console.log(aCountry.replace('Green', 'Is')) // output = Island

//11. charAt() takes an index and returns the value of that index
//syntax ==== variableName.charAt(index)

let newLastIndex = job.length-1
console.log(job.charAt(4)) // output = s
console.log(job.charAt(newLastIndex)) // output = r

//12. charCodeAt() takes an index and returns the char code (ASCII number) of the value at that index
//syntax === variableName.charCodeAt(index)

let lastCharIndex = job.length-1
console.log(job.charCodeAt(0)) // output = 65
console.log(job.charCodeAt(4)) // output = 115
console.log(job.charCodeAt(1)) // output = 115
console.log(job.charCodeAt(22)) // output = 102
console.log(job.charCodeAt(lastCharIndex)) // output = 114

//13. index() takes a substring and if the substring exists in a string, it returns the first position of the first substring, otherwise, it returns -1
//syntax === variableName.indexOf(substring)

console.log(job.indexOf('S')) // output = -1
console.log(job.indexOf('s')) // output = 1
console.log(job.indexOf('logistics')) // output = -1
console.log(job.indexOf('Logistics')) // output = 10
console.log(job.indexOf('Officer')) // output = 20
console.log(job.indexOf('officer')) // output = -1

//14. lastIndexOf() takes a substring and if the substring exists in a string it returns the last position of the substring, otherwise, it returns -1
//syntax === variableName.lastIndexOf(substring)

let note = 'I love Jesus. If you do not love Jesus, who else is there to love?'
console.log(note.lastIndexOf('love')) // output = 61
console.log(note.lastIndexOf('Jesus')) // output = 33
console.log(note.lastIndexOf('If')) // output = 14
console.log(note.lastIndexOf('if')) // output = -1
console.log(note.lastIndexOf('who')) // output = 40

let newNote = 'Let\'s do this'
let anotherNote = 'Lets do that'
console.log(newNote.lastIndexOf('this')) // output = 9
console.log(anotherNote.lastIndexOf('this')) // output = 8
console.log(anotherNote.lastIndexOf('l')) // output = -1
console.log(anotherNote.lastIndexOf('L')) // output = 0
console.log(anotherNote.lastIndexOf('d')) // output = 5
console.log(anotherNote.lastIndexOf('do')) // output = 5
console.log(anotherNote.lastIndexOf('s')) // output = 3
console.log(anotherNote.lastIndexOf('that')) // output = 8
console.log(anotherNote.lastIndexOf('Lets')) // output = 0

let hisString = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(hisString.lastIndexOf('.')) // output = 17
console.log(hisString.lastIndexOf('If')) // output = 19
console.log(hisString.lastIndexOf('JavaScript')) // output = 38
console.log(hisString.lastIndexOf('else')) // output = 54
console.log(hisString.lastIndexOf('love')) // output = 67
console.log(hisString.lastIndexOf('you')) // output = 63

//15. concat() takes many substrings and joins them together.
//syntax === variableName.concat(substring, substring, substring, ...)

let string = '30'
console.log(string.concat('Days','Of', 'JavaScript')) // output = 30DaysOfJavaScript

let anotherCountry = 'South'
console.log(anotherCountry.concat('Korea'))

//16. startsWith(): it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean
//syntax === variableName.startsWith(substring)

let thisString = 'Jesus is the best Lover in this world.'
console.log(thisString.startsWith('is'))  // output = false
console.log(thisString.startsWith('Jesus'))  // output = true
console.log(thisString.startsWith('jesus'))  // output = false
console.log(thisString.startsWith('.'))  // output = false

//17. endsWith(): it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean
//syntax === variableName.endsWith(substring)

let makeString = 'Perfect love casts out fear!'
console.log(makeString.endsWith('fear')) // output = false
console.log(makeString.endsWith('!')) // output = true

//18. search() takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
//syntax === string.search(substring)
let searchString = 'I love Jesus. If you do not love Jesus, who else is there to love?'
console.log(searchString.search('Jesus')) // output = 7
console.log(searchString.search('t')) // output = 26

//19. match() takes a substring or regular expression pattern as an argument and returns an array if there is match otherwise, it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
//syntax === variableName.match(substring)

let loveOne = /love/
let JesusOne = /Jesus/g
let JesusTwo = /Jesus/gi //where g means to search in the whole text, i means case sensitive
let LoveTwo = /love/gi

console.log(note.match('love')) //output = ['love', index: 2, input: 'I love Jesus. If you do not love Jesus, who else is there to love?', groups: undefined]
console.log(note.match(loveOne)) //output = ['love', index: 2, input: 'I love Jesus. If you do not love Jesus, who else is there to love?', groups: undefined]
console.log(note.match(JesusOne)) //output = (2) ['Jesus', 'Jesus']
console.log(note.match(JesusTwo)) //output = (2) ['Jesus', 'Jesus']
console.log(note.match(LoveTwo)) //output = (3) ['love', 'love', 'love']

let hisTxt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(hisTxt.match(regEx))  // ['2019', index: 3, input: 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge', groups: undefined]
console.log(hisTxt.match(/\d+/g)) // ["2019", "30", "2020"]
console.log(hisTxt.match(regEx)) // ['2019', index: 3, input: 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge', groups: undefined]

//20. repeat() takes a number as an argument and returns the repeated version of the string
//syntax === variableName.repeat()

let eg = 'Jesus'
console.log(eg.repeat(10)) // JesusJesusJesusJesusJesusJesusJesusJesusJesusJesus

// Checking Data Types and Casting
// use typeof to check the data type of a certain variable as done in index.html
// casting - changing data types means convertin gone data type to another data type.
// This is done by using parseInt(), parseFloat(), Number(), + sign, str().
// When doing arithmetic operations string numbers should be first converted to integer or float if not it returns an error.
//String to integer (any number inside a quote is a string). This is done using either; parseInt(), Number(), + sign.

let number = '15'
let numberInt = parseInt(number) 
let numInt = Number(number)
let aNewInt = +number
console.log(numberInt) //15
console.log(numInt) //15
console.log(aNewInt) //15
console.log(typeof numInt) //number

//string to float (any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', etc).
//this is done using; parseFloat(), Number(), + sign.

let newNum = '23.4'
let floatNum = parseFloat(newNum)
let floatNum2 = Number(newNum)
let floatNum3 = +newNum
console.log(floatNum) //23.4
console.log(floatNum2) //23.4
console.log(floatNum3) //23.4
console.log(typeof floatNum2) //number

// float to integer. This is done using parseInt()
let aNewFltNum = '25.9'
let floatInt = parseInt(newNum)
let floatNewNum = parseInt(aNewFltNum)  
console.log(floatInt)  //23
console.log(floatNewNum) // 25


//DAY 2 EXERCISES
//Level1
//1.
let challenge = '30 Days of JavaScript'
//2.
console.log(challenge) // output = 30 Days of JavaScript
//3.
console.log(challenge.length) // output = 21
//4.
console.log(challenge.toUpperCase()) //output = 30 DAYS OF JAVASCRIPT
//5. 
console.log(challenge.toLowerCase()) //output = 30 days of javascript
//6.
console.log(challenge.substr(3,5))
console.log(challenge.substring(3,7)) //outputs = days
//7. 
console.log(challenge.slice(3,25)) //output = Days of JavaScript
//8.
console.log(challenge.includes('Script')) //output = true
//9.
console.log(challenge.split()) // output = ['30 Days of JavaScript']
//10.
console.log(challenge.split(" ")) //output = (4) ['30', 'Days', 'of', 'JavaScript']
//11.
let socialMedia = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(socialMedia.split(" ")) //output = (7) ['Facebook,', 'Google,', 'Microsoft,', 'Apple,', 'IBM,', 'Oracle,', 'Amazon']
//12.
console.log(challenge.replace('JavaScript', 'Python')) //output = 30 Days of Python
//13.
console.log(challenge.charAt(15)) //output = S
//14.
console.log(challenge.charCodeAt(11)) // output = 74
//15.
console.log(challenge.indexOf('a')) // output = 4
//16.
console.log(challenge.lastIndexOf('a')) // output = 14
//17.
let newSentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(newSentence.indexOf('because')) // output = 31
//18.
console.log(newSentence.lastIndexOf('because')) // output = 47
//19.
console.log(newSentence.search('because')) // output = 31
//20.
let trailSpace =  ' 30 Days Of JavaScript '
console.log(trailSpace.trim(' ')) // output = 30 Days Of JavaScript
//21.
console.log(challenge.startsWith("30")) // output = true
//22.
console.log(challenge.endsWith('t')) // output = true
//23.
let thisChallenge = /a/gi
console.log(challenge.match(thisChallenge)) //output = (3) ['a', 'a', 'a']
console.log(challenge.match(/a/gi)) //output = (3) ['a', 'a', 'a']
//24.
let aNewChallenge = '30 Days of'
console.log(aNewChallenge.concat('JavaScript')) //output = 30 Days ofJavaScript
//25.
console.log(challenge.repeat(2)) //output = 30 Days of JavaScript30 Days of JavaScript

//level2
//1.
let challengeText = "The quote \'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes. teaches us to help one another."
console.log(challengeText) // output = The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes. teaches us to help one another.
//2. 
let challengeTextNew = '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
console.log(challengeTextNew) //output = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
//3.
let aNewNum = '10'
let normalNum = 10
let numberIntaNewNum = +aNewNum
console.log(typeof '10') // output = string
console.log(typeof 10) //output = number
console.log(typeof numberIntaNewNum) //output = number
//4.
let challengeNum = '9.8'
let parseChallengeNum = +challengeNum
let roundupchallengeNum = Math.ceil(parseChallengeNum)
console.log(parseChallengeNum) // output = 9.8
console.log(roundupchallengeNum) // output = 10
//5.
let text1 = 'python'
let text2 = 'jargon'
console.log(text1.search('on')) //output = 4
console.log(text2.search('on')) // output = 4 
//6.
let jargonText = 'I hope this course is not full of jargon'
console.log(jargonText.includes('jargon')) // output = true
console.log(jargonText.match('jargon')) // output = ['jargon', index: 34, input: 'I hope this course is not full of jargon', groups: undefined]
//7. 
let newRndmNum = Math.random()
let rndmNumBtwn100 = newRndmNum * 101
console.log(rndmNumBtwn100) // output = 100.31489483967543
/*8.
let anotherRndmNum = Math.random()
let rndmNumLimit = Math.
let rndmNumBtw50And100 = Math.floor(anotherRndmNum) * 
console.log(rndmNumBtw50And100)
*/
//9 
let aRndNum = Math.random()
let aRndNumBtw255 = aRndNum * 256
console.log(aRndNumBtw255) // output = 212.008122527433
//10
let jsCharResult = []
let jsChar = 'JavaScript'
let jsCharLength = jsChar.length
let jsCharRndNum  = (jsChar.charAt(Math.floor(Math.random())))
console.log(jsCharRndNum)
//console.log(jsCharRndNum)

//11.
console.log('\t1\t1\t1\t1\t1\n\t2\t1\t2\t4\t8\n\t3\t1\t3\t9\t27\n\t4\t1\t4\t16\t64\n\t5\t1\t5\t25\t125') /* output = 	
1	1	1	1	1
2	1	2	4	8
3	1	3	9	27
4	1	4	16	64
5	1	5	25	125*/
//12.
console.log(newSentence.substr(31,24)) // output = because because because 

//Levl3
//1.
let newWord = "\'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence."
let newWordG = /love/gi
console.log(newWord.match(newWordG)) // output = (4) ['Love', 'love', 'love', 'love']
//2.
let newSentenceG = /because/gi
console.log(newSentence.match(newSentenceG)) // output = (3) ['because', 'because', 'because']
//3.
let regularJunk = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'


//4.
let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let incomeNum = /\d+/g
let annualIncome = incomeText.match(incomeNum) * 12
console.log(incomeText.match(incomeNum)) // output = (3) ['5000', '10000', '15000']
console.log((5000+15000)* 12 + 10000) // output = 250000

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).