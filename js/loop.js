//Loop can be use with iterable Item(Items with Index) Ex. Array, String
//for loop
let a = 5;
//Syntax: for (initilization; condition; increment or decrement)
//Ex. for (let i = 0; i < 5; i = i + 2)

//Ex. 
for (let i = 0; i < 10; i++) {
    console.log(i)
}
//i = 0
//i = 1 ..i = 9
//i = 10 ..it will not go in loop

for (let i = 10; i > 0; i--) {
    console.log(i)
}

//table print
for (let i = 1; i <= 10; i++) {
    console.log(`2 * ${i} = ${2*i}`)
}
//i = 1    2 * 1 = 2
//i = 2    2 * 2 = 4
//i = 10   2 * 10 = 20

const numArray = [5,7,23,8,4545,9898,1,45,6767,2];
//numArray.length //10
let sum = 0;
for (let i = 0; i < numArray.length; i++) {
    const currentElement = numArray[i];
    sum = currentElement + sum;
}
console.log(sum)
for (let i = 0; i < numArray.length; i++) {
    //sum = sum+ numArray[i];
    sum += numArray[i];
}
//sum=0
//i = 0  numArray[0]=5 currentElement=5 sum=5
//i = 1  numArray[1]=7 currentElement=7 sum=12
//i = 9 currentElement = 2 sum=21301
//i =10 //not go in loop

//forEach
let sum1 = 0;
// function fn(currentValue) {
//     sum1 = sum1 + currentValue;
// }
// console.log(fn(5), sum1)
// console.log(fn(7), sum1)
// console.log(fn(30), sum1)
numArray.forEach((val) => sum1 += val)
console.log(sum1)


const stringArray = ["Finland", "Sweden", "Denmark", "Norway"]
function upper(val) {
    return val.toUpperCase()
}
console.log(upper("Finland"))
console.log(stringArray.map(upper), stringArray)

let newArray = []
for (let i = 0; i < stringArray.length; i++) {
    const x = stringArray[i].toUpperCase()
    newArray.push(x)
}
console.log(newArray)
//i=0 stringArray[0]="Finland" x = "FINLAND" newArray=["FINLAND"]
//i=1 stringArray[1]="Sweden" x = "SWEDEN" newArray=["FINLAND","SWEDEN"]


