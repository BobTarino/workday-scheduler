// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// CODE HERE: 
const todayDate = (moment().format('LLLL'));
$("#currentDay").append(todayDate.toString());

// page is in state of "readiness" and can be manipulated safely
$(document).ready(function () {

    // save task to localStorage
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);

    });

    function timeManage() {
        //current time
        var currentState = moment().hours();

        // iterate loop through time blocks
        $(".time-block").each(function () {
            var blockState = parseInt($(this).attr("id").split("-")[1]);

            // If/else statement to change color of time block
            if (blockState < currentState) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockState === currentState) {
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


    // loading saved tasks from localStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    timeManage();
})

