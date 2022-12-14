//Arrays
//Comes under Object Datatype
// Can hold objects also {}
//Normal Syntax: [] => Square bracket
//Anything with [] is array
//Exception => string[index] i.e. Vishal => Vishal[1]
//Iterable(Looping)
// We can get value by Index

//1. Empty Array
//Normal
const emptyArray = [];
//By Array Construtor
const emptyArr = Array();
//In Java
// class HomePage {
//     public static void HomePage() {
            //Any Logic or Statement
//     }
        // public static Void Sum() {
        //     return 3 + 3
        // }
// }
//int obj = new HomePage()
// obj.Sum()

// class Array {
//      Array() {
//         return []
//     }
// }

//2. Array with Values
//Number Array
const numArray = [5,7,23,8,4545,9898];
//StringArray 
const strinArray = ["vishas", "donga", "1323"]
//ObjectArray
const objArray = [
    {
        name: 'Visagl'
    },
    {
        name: 'Donga'
    }
]
const mixArry = [5,"viushal", null, undefined]

//Length
const arrLength = mixArry.length;
console.log(arrLength) //4

//String to Array
const name1 = "Vishal,Donga,25"
const array1 = name1.split(",")
console.log(array1)

//Access by Index
console.log(array1[0]) //Vishal
console.log(array1[1])//Donga

//Changing the Array Element
const numArray1 = [5,7,23,8,4545,9898];
console.log(numArray1) //[5, 7, 23, 8, 4545, 9898]
numArray1[3] = 10;
numArray1[5] = 10000;
console.log(numArray1) //[5, 7, 23, 10, 4545, 10000]

//Blank Array with length
const arr = Array(10)
console.log(arr)

//Fill
const aFill = arr.fill("A")
console.log(aFill) //['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A']
const aFill2 = arr.fill("B", 5)
console.log(aFill2) //['A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'B']
const aFill3 = arr.fill("C", 4, 8)
console.log(aFill3) //['A', 'A', 'A', 'A', 'C', 'C', 'C', 'C', 'B', 'B']

//Join/Concat Array
const firstArray = [1,3,4,5]
const secondArray = [3,7,1,6]
console.log(firstArray.concat(secondArray)) //[1, 3, 4, 5, 3, 7, 1, 6]










