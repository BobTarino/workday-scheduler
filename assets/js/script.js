// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// CODE HERE: 
const todayDate = (moment().format('LLLL'));
$("#currentDay").append(todayDate.toString());

$(document).ready(function () {

    // save task to local storage
    $(".saveBtn").on("click", function () {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");


        localStorage.setItem(time, text);
        console.log("saveBtn clicked");

    });


    function timeTracker() {
        //current time
        var timeNow = moment().hours();

        // loop through time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("-")[1]);

            // Add and remove classes depending on time
            if (blockTime < timeNow) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    }


    // // getting saved tasks from local storage 
    // $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    // $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    // $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    // $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    // $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    // $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    // $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    // $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    // $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    // timeTracker();
})

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future


// var counter = 1;
// for(const property in workDay) {
//   var textEntry = "#textEntry" + counter;
//   $(textEntry).text(workDay[property]);
//   var timeId = "#time" + counter;
//   var presentHour = moment().hour();
//   var timeString = $(timeId).text();
//   var timeNumber = hourNumberFromHourString(timeString);  
//   if(timeNumber < presentHour) {
//     $(textEntry).addClass("past");
//   } else if (timeNumber > presentHour) {
//     $(textEntry).addClass("future");
//   } else {
//     $(textEntry).addClass("present");
//   }
//   counter++;
// } 
// $("button").click(function() {
//     value = $(this).siblings("textarea").val();
//     hourString = $(this).siblings("div").text();

//     saveSchedule(hourString, value);
//   });
// function hourNumberFromHourString(hourString) {
//     switch(hourString) {
//       case "9 AM": return 9;
//       case "10 AM": return 10;
//       case "11 AM": return 11;
//       case "12 PM": return 12;
//       case "1 PM": return 13;
//       case "2 PM": return 14;
//       case "3 PM": return 15;
//       case "4 PM": return 16;
//       case "5 PM": return 17;
//     }
// }

