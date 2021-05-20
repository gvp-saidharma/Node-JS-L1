// Create a Node JS Script, using ‘http’ module that downloads the content from a web page to a file
// E.g. to download the google home page

let http = require('http');
const fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
    let reqBody = req.body;
    fs.writeFileSync("test.txt", JSON.stringify(reqBody));
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080