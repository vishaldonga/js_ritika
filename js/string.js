const blankString = ''; //valid string
console.log(typeof blankString)

const fName = 'Vishal';
const sName = 'Donga';

//Hello Vishal, Welcome to facebook.

//String Operations
//Cancatenation (Joining)
// + number => addition
// + string => concat
const fullName = fName + " " + sName + "Welcom";
console.log(fullName)

//By backtick(template literal)  ``
console.log(`${fName} hello  ${sName} Welcome to facebook`)

//Literals \ \n \t

const para = 'My name is Vishal. I live in Surat'
console.log(para)

//Get char from string
console.log(fName[2])

//length
console.log(fName.length)

//get index of string
console.log(fName.indexOf('sa'))
//if doesn't find index it returns -1
//if (fName.indexOf('vs') > -1)

//with position
console.log(fName.indexOf('sh', 4))

//with position
console.log('vishalvi'.lastIndexOf('vi'))

//toUpperCase & toLowerCase
console.log(fName.toUpperCase())

//substring => get substring from string
console.log(fName.substring(0,3)) //Vis
console.log(fName.substring(3)) //hal

//includes => Checking whether string includes certain char or substring
console.log(fName.includes('isa'))
//if (fName.includes('vs'))

//charAt same as fName[2]
console.log(fName.charAt(2)) //s

//charCodeAt => return ASCII Valuse
console.log(fName.charCodeAt(2)) //115

//startsWith && endsWith
console.log(fName.startsWith('Vis'))

//Regular Expression => to Match some pattern
//Ex. email
//console.log(fName.match())