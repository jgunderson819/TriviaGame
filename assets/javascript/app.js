// create countdown timer

$(document).ready()
//  Variable that will hold our setInterval that runs the clock
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = true;
var time = 0;
var lap = 1;

function reset() {

  time = 0;
  lap = 1;

  // DONE: Change the "display" div to "00:00."
  $("#timer").text("05:00");

  // DONE: Empty the "laps" div.
  $("#laps").text("");
}
function start() {

  // DONE: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}
function stop() {

  // DONE: Use clearInterval to stop the count here and set the clock to not be running.
  clearInterval(intervalId);
  clockRunning = false;
}
function recordLap() {

  // DONE: Get the current time, pass that into the timeConverter function,
  //       and save the result in a variable.
  var converted = timeConverter(time);

  // DONE: Add the current lap and time to the "laps" div.
  $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");

  // DONE: Increment lap by 1. Remember, we can't use "this" here.
  lap++;
}
function count() {

  // DONE: increment time by 1, remember we cant use "this" here.
  time++;

  // DONE: Get the current time, pass that into the timeConverter function,
  //       and save the result in a variable.
  var converted = timeConverter(time);
  console.log(converted);

  // DONE: Use the variable we just created to show the converted time in the "display" div.
  $("#display").text(converted);
}
function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}










// create questions

