//Reuse
//Readability
//Modularised => Code division

//() is identifier for function/method

//2 types of syntax
//1. Traditional function
//Syntax
function sum() {
    //logic
}
//2. Arrow function
const sum2 = () => {
    //logic
}

//Calling Fn: sum()

function sub(a, b) {
    return a - b;
}
const x = sub(6,4) //2

//Database push
function pushData(x) {
    //logic
}

// Let us access the arguments object
//arguments is a word
function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

//Syntax for arrow funtion
const sum21 = (...args) => {
    console.log(args)
}
sum21(1, 2, 3, 4)


//Anonymous function => Unnamed function
const anonymous = function() {

}

//Self invoking(calling) function
(function xyz()
{
    return 5;
})()

