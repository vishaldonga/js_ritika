const name = "Vishal";
const age = 25;
const DOB = "2 Jan 2022";
const address = "22 Baker street";

const name2 = "Vishal2";
const age2 = 23;
const DOB2 = "2 Jan 2022";
const address2 = "22 Baker street2";

const details = ["Vishal", "25", "2 Jan"];

const detailObject = {
  name: "Vishal",
  age: 25,
  DOB: "2 Jan 2022",
  address: "22 Baker street",
};
const detailObject2 = {
  name: "Vishal2",
  age: 25,
  DOB: "2 Jan 2022",
  address: "22 Baker street2",
};

console.log(name); //Vishal
console.log(detailObject.name); //Vishal

const objArray = [
  {
    name: "Vishal",
    age: 25,
    DOB: "2 Jan 2022",
    address: "22 Baker street",
  },
  {
    name: "Vishal2",
    age: 25,
    DOB: "2 Jan 2022",
    address: "22 Baker street2",
  },
  {
    name: "Vishal3",
    age: 25,
    DOB: "2 Jan 2022",
    address: "22 Baker street2",
  },
  {
    name: "Vishal4",
    age: 25,
    DOB: "2 Jan 2022",
    address: "22 Baker street2",
  },
];

console.log(objArray.length); //4
console.log(objArray[1]) //{
//     name: "Vishal2",
//     age: 25,
//     DOB: "2 Jan 2022",
//     address: "22 Baker street2",
//   }
console.log(objArray[1].address) //"22 Baker street2"
