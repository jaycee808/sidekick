// variables for current day and time
var currentDate = moment().format('Do MMMM');
var dayOfTheWeek = moment().format('dddd');

// display current date and time to the screen
$('#currentDay').append(currentDate);
$('#dayOfTheWeek').append(dayOfTheWeek.toLowerCase());