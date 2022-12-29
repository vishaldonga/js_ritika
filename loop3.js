//#         
//##
//###
//####

//Treat this like multidomensional array
//#
//rowIndex = 0  colIndex = 0
//## => first Hash
//rowIndex = 1  colIndex = 0
//## => second Hash
//rowIndex = 1  colIndex = 1
//###  => first Hash
//rowIndex = 2  colIndex = 0
//###  => second Hash
//rowIndex = 2  colIndex = 1
//###  => Third Hash
//rowIndex = 2  colIndex = 2
//i => rowIndex  j=ColIndex
let hash = ''
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= i; j++) { // < 1 <= 0
        hash = hash + '#'
    }
    hash += '\n';
}
console.log(hash)

//i = 0 j = 0 #
// i = 0 j = 1 //break;
//i = 1 j = 0 ##
//i =1 j = 1 ###
// i = 1 j = 2//Break;
// i = 2 j = 0 //####
// i = 2 j = 1 //#####
// i = 2 j = 2 //######
//i = 2 j = 3 //break;

//DOWNWARD Triangle
// #####
// ####
// ###
// ##
// #
//i = 0 j = 0
//i = 0 j = 1
//i = 0 j = 2 ...
//i = 1 j = 0
//i = 1 j =1 ..
//i = 2 j = 0

let hash1 = '';
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10 - i; j++) {
        hash1 = hash1 + '#'
    }
    hash1 += '\n';
}
console.log(hash1)

// i = 0 j = 0
// i = 0 j = 1
// i = 0 j = 2
// i = 0 j = 3 ...upto 10
// i = 1 j = 0
// i = 1 j = 1 ...upto 10 10 - 1 
// i = 2 j = 0 ...8 //correct
//we want 9






