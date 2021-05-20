const calculator = require('./math');

//C Create a user defined module named “Math” with four functions Addition, Subtraction, Multiplication, Division and export them. Import Math module form other Node JS Script file and invoke all the four functions to perform operations on given input
var a=10, b=5;
  
console.log("Addition : "+ calculator.add(a,b));
console.log("Subtraction : "+ calculator.subtract(a,b));
console.log("Multiplication : "+ calculator.multiply(a,b));
console.log("Division : "+ calculator.divide(a,b));