// variables for current day and time
var currentDate = moment().format('dddd Do MMMM');
var dayOfTheWeek = moment().format('dddd');

// display current date and time to the screen
$('#currentDate').append(currentDate.toLowerCase());
$('#dayOfTheWeek').append(dayOfTheWeek.toLowerCase());