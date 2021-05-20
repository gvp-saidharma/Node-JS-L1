const fs = require('fs');

//C Create a Node JS script that reads the file name from console and displays the contents of the file
//ii. Asynchronous mode
  console.log("Enter file name"); 
  process.stdin.on('data', (chunk)=> {
    try {
      let filePath = chunk.toString().trim();
      const data = fs.readFileSync(filePath, 'utf8')
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  })