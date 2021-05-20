const date = require('./date');

//D Create a daysTill custom module. It should be able to give you the number of days
//till Christmas and the number of days till mother’s day. number of days till your
//Birthday.(Hint : Subtract both the dates to get difference in no.of milliseconds)
let currentDate = new Date();

let christmasDate = date.NexyYearDate(currentDate, 25, 12); 
let motherDayDate = date.NextMothersDayDate(currentDate); 
let birthDate = date.NexyYearDate(currentDate, 18, 10);

console.log(`Christmas is in ${date.timeDiffInDays(currentDate, christmasDate)}`);
console.log(`Mother's Day is in ${date.timeDiffInDays(currentDate, motherDayDate)}`);
console.log(`Birth Date is in ${date.timeDiffInDays(currentDate, birthDate)}`);