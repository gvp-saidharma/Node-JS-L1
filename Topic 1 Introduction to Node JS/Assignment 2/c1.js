const fs = require('fs');

//C Create a Node JS script that reads the file name from console and displays the contents of the file
//i. Synchronous mode
console.log("Enter file name"); 
process.stdin.on('data', (chunk)=> {
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
  })