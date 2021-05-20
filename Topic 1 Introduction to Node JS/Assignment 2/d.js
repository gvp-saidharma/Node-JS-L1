const fs = require('fs');

//D Create a NodeJS based script file, that reads the names of the 2 files from the user (Use process module; On stdin “data” event by using call-back accept the input from the user)
//and reads the content of first file by using Read Stream API and writes in into second file by using Write Stream API. If second file is available it should append the content. If not it should create a new file and add the content to it.
  let stdinData = [];
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
  })
