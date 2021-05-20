// Returns Current Date
exports.date = function () {
    return new Date().toISOString().slice(0, 10);
}; 
 
// Returns Current Time
exports.time = function () {
    return new Date().toISOString().slice(11, 19);
}; 

// Returns Time Difference in Days
exports.timeDiffInDays = function (date1, date2) {
    // get total seconds between the times
    var delta = date2 - date1;

    // calculate (and subtract) whole days
    return Math.floor(delta / 86400000);
};

exports.NexyYearDate = function (currentDate, day, month) {
    let date = new Date(currentDate);
    date.setDate(day);
    date.setMonth(month-1);
    if(date - currentDate < 0){
        date.setFullYear(date.getFullYear()+1);
    }
    return date;
}; 


exports.NextMothersDayDate = function (currentDate) {
    let date = new Date(currentDate);
    let mothersDay = mothersDayDate(date);
    if(mothersDay - date < 0){
        date.setFullYear(date.getFullYear()+1);
        mothersDay = mothersDayDate(date);
    }
    return mothersDay;
}

mothersDayDate = function (currentDate) {
    let date = new Date(currentDate);
    date.setDate(1);
    date.setMonth(4);
    let dayOfWeek = date.getUTCDay();   // Now that we know what day of the week it falls on, we can calculate the first Sunday of the month
    let firstSunday;
    if (dayOfWeek === 0) {
        firstSunday = date;
    } else {
        firstSunday = new Date(date);
        firstSunday.setDate(1 + (7 - dayOfWeek));
    }
    // we need to do is add another 7 days to that

    let mothersDay = new Date(firstSunday);
    mothersDay.setDate(firstSunday.getUTCDate() + 7);
    mothersDay = new Date(mothersDay);

    return mothersDay;
}

