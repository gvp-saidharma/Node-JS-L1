const os = require('os');
const colors = require('colors');
const fs = require('fs');
const { exec } = require('child_process');

const calculator = require('./math');
const date = require('./date');


//Topic 1 Assignment 1

//A Create a Node JS Script file that displays hostname & platform details of current system
  console.log("Platform: " + os.platform());
  console.log("Hostname: " + os.hostname());

//B Create a Node JS script file that displays “Hello” text in red color and “Welcome to Node JS” text in rainbow colors on the console
  console.log('Hello'.red); 
  console.log('Welcome to Node JS'.rainbow); 
  
//C Create a user defined module named “Math” with four functions Addition, Subtraction, Multiplication, Division and export them. Import Math module form other Node JS Script file and invoke all the four functions to perform operations on given input
  var a=10, b=5;
  
  console.log("Addition : "+ calculator.add(a,b));
  console.log("Subtraction : "+ calculator.subtract(a,b));
  console.log("Multiplication : "+ calculator.multiply(a,b));
  console.log("Division : "+ calculator.divide(a,b));

//D Create a Node JS Script that displays a message “ Welcome to Node JS” through loop, with delay in between the iterations Using setTimeOut()
  setTimeout(function () {
      console.log('Welcome to Node JS')
  }, 100);



//Topic 1 Assignment 2

//A Create a NodeJS based script file, that provides implementation for ‘pwd’ command from ‘Node’ shell.
  exec('pwd', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }

    console.log(`${stdout}`);
  });

//B Create a NodeJS based script file, that reads the name of the directory from the command line arguments and displays the list of directory contents (using fs module)
  /*process.stdin.on('data', (chunk)=> {
    let dirPath = chunk.toString().trim();
    fs.readdir(dirPath, (err, files) => {
      if(err) {
        console.error(err);
        return;
      }
      files.forEach(file => console.log(file));
    });    
  })*/

//C Create a Node JS script that reads the file name from console and displays the contents of the file
//i. Synchronous mode
  /*process.stdin.on('data', (chunk)=> {
    process.stdin.pause();
    let filePath = chunk.toString().trim();
    fs.readFile(filePath, 'utf8', (err, data) => {
      if(err) {
        console.error(err);
        process.stdin.resume();
      } else {
        console.log(data);
        process.stdin.resume();
      }
    });    
  })*/

//ii. Asynchronous mode
  /*process.stdin.on('data', (chunk)=> {
    try {
      let filePath = chunk.toString().trim();
      const data = fs.readFileSync(filePath, 'utf8')
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  })*/

//D Create a NodeJS based script file, that reads the names of the 2 files from the user (Use process module; On stdin “data” event by using call-back accept the input from the user)
//and reads the content of first file by using Read Stream API and writes in into second file by using Write Stream API. If second file is available it should append the content. If not it should create a new file and add the content to it.
  /*let stdinData = [];
  console.log("Enter First file for Read Stream");
  process.stdin.on('data', (chunk)=> {
    try {
      let filePath = chunk.toString().trim();
      if(stdinData.length == 0) {
        console.log("Enter Second file for Write Stream");
        let isexistsSync = fs.existsSync(filePath);
        if (isexistsSync && fs.lstatSync(filePath).isFile()) {
          stdinData.push(filePath);
        } else if(!isexistsSync) {
          console.log(`${filePath} doesn't exists`)
        } else {
          console.log(`${filePath} is not a file`)
        }
      } else {
        stdinData.push(filePath);
        let readerStream = fs.createReadStream(stdinData[0]); //Create a readable stream
        let writableStream = fs.createWriteStream(stdinData[1], { 'flags': 'a'});

        readerStream.setEncoding('UTF8'); // Set the encoding to be utf8. 

        // Handle stream events --> data, end, and error
        readerStream.on('data', function(chunk) {
          writableStream.write(chunk);
        });

        readerStream.on('end',function() {
          writableStream.end();
        });

        readerStream.on('error', function(err) {
          console.log(err.stack);
        });

        stdinData = []; 
        console.log("Enter First file for Read Stream");  
      }       
    } catch (err) {
      console.error(err)
    }
  })*/


//Topic 1 Assignment 3

//A Create a user defined date module that can give you the current date and time.
//B Write a Node script file to display current Date & Time by using user defined date module
console.log(date.date());
console.log(date.time());


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





