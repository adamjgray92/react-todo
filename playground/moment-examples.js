var Moment = require('moment');

console.log(Moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = Moment();
console.log('Current timestamp: ' + now.unix());

var timestamp = 1507842032;
var currentMoment = Moment.unix(timestamp);

console.log('Current Moment: ' + currentMoment.format("MMMM Do YYYY, h:mm:ss a"));
