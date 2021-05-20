//A Create a user defined date module that can give you the current date and time

// Returns Current Date
exports.date = function () {
    return new Date().toISOString().slice(0, 10);
}; 
 
// Returns Current Time
exports.time = function () {
    return new Date().toISOString().slice(11, 19);
}; 