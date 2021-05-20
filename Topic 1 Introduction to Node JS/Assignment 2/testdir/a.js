const { exec } = require('child_process');

//A Create a NodeJS based script file, that provides implementation for ‘pwd’ command from ‘Node’ shell.
exec('pwd', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }

    console.log(`${stdout}`);
  });