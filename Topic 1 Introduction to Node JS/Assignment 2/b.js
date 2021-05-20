const fs = require('fs');

//B Create a NodeJS based script file, that reads the name of the directory from the command line arguments and displays the list of directory contents (using fs module)
console.log("Enter name of the directory"); 
process.stdin.on('data', (chunk)=> {
    let dirPath = chunk.toString().trim();
    fs.readdir(dirPath, (err, files) => {
      if(err) {
        console.error(err);
        return;
      }
      files.forEach(file => console.log(file));
    });    
});