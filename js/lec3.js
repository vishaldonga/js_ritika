//Booleans
//true / false
// 0=> false / 1=true
// conditional operator returns true/false
const isNumber = false;
const isMarried = true; //right way

const married = true; //wrong way
const hasAccess = true; //right way
const access = false; //wrong way

const fourGretThree = 4 > 3; //true
const x = typeof "a" == typeof "b";

//Falsy Values => false
// 1. false
// 2. 0
// 3. null
// 4. undefined
// 5. '' => empty String
// 6. NaN(Not a number)
// 7. 0n

//console.log(4 === 5) //false
const x1 = null;
if (x1) {
  console.log("true");
} else {
  console.log("false");
}

//Operators
let myName = "Vishal";
// = operator call as assignment operator
//+=
let sum = 0;
//Both are same
sum += 5;
sum = sum + 5;
//-=, *=, /=, %= => same as +=
//  **= to find power of any number
const a = 3 ** 2; //9
const b = 3 ** 4; //81

//Comparison operaors => true and false
// 1. == => compare equality but will not check type
// 2. === => Comparing with type(Recommended)
// 3. != => compare inequality
// 4. !== => compare inequality with type(Recommended)
// 5 > Grater than
// 6 < less than
//7 >= Greter than equal to
//8 <= less than equal to

//Logical Operator => return true/ false
// AND &&  => All condition needs to be satisfy
const y = 4 < 5 && 3 > 4 && 1 < 2;
// OR || => only one condition need to be satisfy
const y1 = 4 < 5 || 3 > 4 || 1 > 2;
// NOT ! => change true to false or false to true
const z = !false; // true
const a1 = !(4 > 3);

//Incremnt ++
//1. pre increment(Normally use)
let s = 10;
const m = ++s; // m = 11 s = 11
console.log(m, s);

// 2. post increment
let s1 = 10;
const m1 = s1++;
console.log(m1, s1); // m =10 s = 11
// Decrement
//1. pre Decrement(Normally use)
let s2 = 10;
const m2 = --s; // m = 11 s = 11
console.log(m2, s2);

// 2. post Decrement
let s3 = 10;
const m3 = s3++;
console.log(m3, s3);


//Ternary operator
// ? :
const isMarried1 = true;
// if (isMarried1) {
//     console.log("MARRIED")
// } else {
//     console.log("UNMARRIED")
// }
isMarried1 ? console.log("MARRIED") : console.log("UNMARRIED")
