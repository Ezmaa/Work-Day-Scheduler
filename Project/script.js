// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// TODO: Add code to display the current date in the header of the page.
//  THEN the current day is displayed at the top of the calendar


let saveBtn = $(".saveBtn");

let today = dayjs();
$('#currentDay').text(today.format('MMM DD, YYYY'));

// color codes each block of time 
function setColor() {
  let time = moment().hours();
  // iterates over each block
  $(".time-block").each(function () {
    let currentTime = parseInt($(this).attr("id"));
    console.log(this);

    if (currentTime > time) {
      $(this).addClass("future");
    } else if (currentTime === time) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  })
};

saveBtn.on("click", function () 

// save and then grab inputs from local storage 
function saveSchedule() {
  
}


setColor();


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});
