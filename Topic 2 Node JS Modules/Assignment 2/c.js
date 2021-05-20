// Write a Node JS script file to create & emit custom events one, two & three with
// messages “First Event” ,”Second Event” & “Third Event” by using Event Emitter class of Events module

var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function (message) {
    console.log(`listner1 message:${message}`);
}

// listener #2
var listner2 = function listner2(message) {
    console.log(`listner2 message:${message}`);
}

// listener #3
var listner3 = function listner2(message) {
    console.log(`listner3 message:${message}`);
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('one', listner1);

// Bind the connection event with the listner2 function
eventEmitter.addListener('two', listner2);

// Bind the connection event with the listner3 function
eventEmitter.addListener('three', listner3);

// Fire the connection events 
eventEmitter.emit('one', 'First Event');
eventEmitter.emit('two', 'Second Event');
eventEmitter.emit('three', 'Third Event');

// Remove the binding of listner1 function
eventEmitter.removeListener('one', listner1);
console.log("Listner1 will not listen now.");


// Remove the binding of listner2 function
eventEmitter.removeListener('two', listner2);
console.log("Listner2 will not listen now.");

// Remove the binding of listner3 function
eventEmitter.removeListener('three', listner3);
console.log("Listner3 will not listen now.");

