//B Send a request to server from browser(http://localhost:3000) & get the response
//C Create a client socket that sends request to the server along with a message “Hello Server”
//D Test it through ‘telnet’, to see the message echo

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const port = process.env.PORT || 3000
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(__dirname));

io.on('connection', (socket) => {
  console.log("A new user just connected");

  socket.on('createMessage', (message) => {
    console.log('message from user:', message);
  });

  socket.on('disconnect', () => {
    console.log('A user left')
  });
});

server.listen(port, ()=>{
  console.log(`Server is up on port ${port}`);
})
