// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// TODO: Add code to display the current date in the header of the page.
//  THEN the current day is displayed at the top of the calendar


// let today = dayjs();
$('#currentDay').text(moment().format('MMM DD, YYYY'));

// color codes each block of time 
function setColor() {
  let time = moment().hours();
  // iterates over each block
  $(".time-block").each(function () {
    let currentTime = parseInt($(this).attr("id"));

    console.log(time);
   
// 
    if (currentTime > time) {
      $(this).addClass("future");
    } else if (currentTime === time) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  })
};

let saveBtn = $(".saveBtn");

saveBtn.on("click", function () {

  let hour = $(this).siblings(".hour").text();
  let schedItem = $(this).siblings(".description").val();

  localStorage.setItem(hour, schedItem);

});

// save and then grab inputs from local storage 
function saveSchedule() {
  $('.hour').each(function () {
    let currTime = $(this).text();
    let currSched = localStorage.getItem(currTime);
    if (currSched !== null) {
      $(this).siblings(".description").val(currSched);
    }
  });
}


setColor();
saveSchedule();

