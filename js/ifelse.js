//Conditions
//Syntax => if
// if (condition) {
// }

//Syntax => if else
// if (condition) {
// } else {
// }

//Syntax => if else if
// if (condition) {
// } else if(condition) {
// }else {
// }

let x = 5;
if (x > 0) {
  console.log("x is +ve number");
} else if (x < 0) {
  console.log("x is -ve number");
} else if (x === 0) {
  console.log(" x is zero");
} else {
  console.log("not a number");
}

//  x> 3 && y >7
const day = new Date().getDay(); //0 to 6
if (day === 0) {
  console.log("Sunday");
} else if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday");
} else {
  console.log("No Day");
}

//Switch
//Prime usecase=> When we are dealing with one variable
// switch(var) {
//     case 'case1' : statements;
//     break;
//     case 'case2' : statements;
//     break;
//     default: statements;
//     break;
// }

const day1 = new Date().getDay() - 2; //0 to 6
switch (day1) {
  case 0:
    console.log("Sunday");
    break;
  case 1: {
    //for multiple statements
    console.log("Monday");
    break;
  }
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("no day");
    break;
}

//Ternary operator
//Alternative of if else
// const myName = prompt("Enter your name:");
// if (myName === "Vishal") {
//     console.log("name is Vishal")
// } else {
//     console.log("name is other")
// }
//Syntax of ternary => condition ? if condition statement : else cond state
// myName === "Vishal" ? console.log("name is Vishal") : console.log("name is other");

//Nested ternary

const num = prompt("Enter the number:");
if (num > 10) {
  if (num % 5 === 0) {
    console.log("number is > than 10 and divisble by 5");
  } else {
    console.log("number is > than 10 but not divisble by 5");
  }
} else {
  console.log("Number is < then 10");
}
num > 10
  ? num % 5 === 0
    ? console.log("number is > than 10 and divisble by 5")
    : console.log("number is > than 10 but not divisble by 5")
  : console.log("Number is < then 10");

// num > 10 && num % 5 === 0 ? console.log("number is > than 10") : console.log("Number is < then 10")
