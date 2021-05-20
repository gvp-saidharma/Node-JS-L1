const date = require('./date');

//C Write a Node script file to find out how many seconds are there in a year. How many seconds are there in a century and writes the result into a file.
let dateNow = new Date();
let nextYearDate = new Date();
let nextCenturyDate = new Date();
nextYearDate.setFullYear(nextYearDate.getFullYear() + 1);
nextCenturyDate.setFullYear(nextCenturyDate.getFullYear() + 100);


var secondsinYear = Math.floor((nextYearDate - (dateNow))/1000);
var secondsinCentury = Math.floor((nextCenturyDate - (dateNow))/1000);
console.log(`${secondsinYear} seconds are there in a year`);
console.log(`${secondsinCentury} seconds are there in a century`);