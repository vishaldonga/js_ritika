//IndexOF
const itCompanies = ["Google", "facebook", "McD", "IBM", "TCS"]
console.log(itCompanies.indexOf("facebook")) //1
//If not find then returns -1
//Usage
// if(itCompanies.indexOf("facebook") > -1) {
// }

//lastIndexOf
const itCompanies2 = ["Google", "facebook", "McD", "IBM", "TCS", "facebook"]
console.log(itCompanies2.indexOf("facebook")) //1
console.log(itCompanies2.lastIndexOf("facebook"))  //5

//includes
console.log(itCompanies.includes("facebook")) //true

//Checking whether something is Array or not
console.log(Array.isArray(itCompanies)) //true

//Convert array to string
console.log(itCompanies) //['Google', 'facebook', 'McD', 'IBM', 'TCS']
console.log(itCompanies.toString())//Google,facebook,McD,IBM,TCS

//Join by specific character
console.log(itCompanies.join(" ")) //Google facebook McD IBM TCS
console.log(itCompanies.join(" and ")) //Google and facebook and McD and IBM and TCS

//Slice method
//Remove elements multiple
//Important => Creates new Array after doing operation.(Copying)
console.log(itCompanies.slice())
console.log(itCompanies)
console.log(itCompanies.slice(0, 3)) //0, 1, 2
console.log(itCompanies) //['Google', 'facebook', 'McD', 'IBM', 'TCS']


//Splice method
//Important=> Remove elements in original array
console.log(itCompanies.splice(0, 3)) //0, 1, 2
console.log(itCompanies) //['IBM', 'TCS']

//Push(Add) in Array => Widely use method
//itCompanies2=> ["Google", "facebook", "McD", "IBM", "TCS", "facebook"]
const x = itCompanies2.push('Google')
itCompanies2.push('facebook')
itCompanies2.push('McD')
console.log(itCompanies2)

//Pop (Remove elements from last)
//Returns removed element
const y = itCompanies2.pop()
itCompanies2.pop()
itCompanies2.pop()
console.log(itCompanies2)

//Shift (Remove elements from first)
//Returns removed element
itCompanies2.shift()
console.log(itCompanies2)

//Unshift(Add element from first) => unsafe
itCompanies2.unshift('facebook2')
console.log(itCompanies2)

//Sort //Requires logic inside
itCompanies2.sort()
console.log(itCompanies2.sort((a, b) => (a > b ? -1 : 1)))
const numArray = [5, 3, 11, 7, 10, 1]
console.log(numArray.sort((a, b) => b - a))

//Reverse
//reverse the array
itCompanies.reverse()

//Filter
//Requires Function
const ages = [32, 33, 16, 40, 12, 33, 3, 7];
// const fn = (element) => {
//     return element >= 18
// }
const filteredItem = ages.filter((element) => {
    return element >= 18
})

const filteredItem2 = ages.filter((element) => element >= 18)
console.log(filteredItem)

//Map Function
//Requires Function
//Use for modification
//Returns new Array
const fn = (element) => {
    return element * 2
}
const newArr = ages.map(fn)
console.log(newArr, ages)

//ForEach
//Alternative of for loop
//Not returning anything, modify origincal array
const fn2 = (element) => {
    return element + 5
}
ages.forEach(() => {
    console.log("hello")
})
console.log(newArr2) //undefined
console.log(ages)




 




