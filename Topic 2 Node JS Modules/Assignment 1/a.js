// Create Server socket that listens at a port number 3000 and creates sockets for every
// client request and sends “Hello Client” message (Hint: Use net module)

const server = require('net').createServer();
const port = 3001;

server.on('connection', socket => {
    socket.write("Hello Client");
    socket.on("data", data=>{
        console.log(data.toString());
    })
});

server.listen(port, ()=> {
    console.log(`server is listening on port ${port}`);
});
