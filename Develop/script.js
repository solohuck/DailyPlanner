// gets the current date using moment.js and formats it as "Monday, October (current date)"
var currentDate = moment().format("dddd, MMMM Do");
// sets the current date to the #currentDay id in the HTML
$("#currentDay").html(currentDate);

$(function () {
    // click function for the .saveBtn class
    // seeing if the .saveBtn class is clicked (on) = onclick
    $(".saveBtn").on("click", function () {
        // text is equal to the text in the .description class
        var text = $(this).siblings(".description").val();
        // time is equal to the id  ex. (#hour10)
        var time = $(this).parent().attr("id");
        // sets the local storage of the text (".description") and what time block its set in
        localStorage.setItem(time, text);
    })
    // a fuction to keep track of the current time and to choose the correct color for past, present, and future.
    function timeKeeper() {
        // uses moment.js to find the current time
        var currentTime = moment().hour();
        // a function for each .time-block class
        $(".time-block").each(function () {
            // this timeBlock variable is getting the number from the ids ex. #hour10 
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
            // if the number from the id is less than the current time, add the past color code and remove the other color classes
            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
                // if the number from the id is equall to the current time, add the present color code and remove the other color classes
            } else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
                // if its neither the past or the present, add the future color code and remove the other color classes
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    // gets the saved info from local storage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    // calls the timeKeeper function
    timeKeeper();
})
