console.log(Date.now()) //Return current timestamp

//Time Object
const now = new Date();
console.log(now)

const now1 = new Date();
console.log(now1.getFullYear())
console.log(now1.getMonth())
console.log(now1.getDate())
console.log(now1.getHours())
console.log(now1.getMinutes())
console.log(now1.getSeconds())

//Returns 0 to 6
//0 => Sunday
//6 => Saturday
console.log(now1.getDay())
if (now1.getDay() === 0) {
    console.log("Sunday")
}

console.log(`${now1.getDate()}-${now1.getMonth()}-${now1.getFullYear()}`)


//Time
const now2 = new Date();
console.log(now2.getTime())// return timestamp

//UTC => Greenwitch time
console.log(now2.getTimezoneOffset())

//To print time of specific timezone
console.log(now2.toLocaleString('en-US', {
    timeZone: 'America/New_York',
  }));

//   {
//     "updateDate" : "25 Dec 2022"
//   }
//Manually date
let date = new Date("25 Dec 2022");
console.log(date)