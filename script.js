// Set current date within jumbotron at the top of the page.  The format of the date will read as ("Day of the Week", "Month" "Date Number").
let currentDate = $("#currentDay").text(moment().format("dddd, MMMM Do"));

// Retrieve the current number of hours
let currentHour = moment().hours();

$(document).ready(function() {

    // Format each block of time with colors based on the current time of day.  For example, hour blocks that are in the past will be shaded light grey, the current/present hour block will be shaded red, and the future hour blocks will be shaded green.
    function updateHourBlocks() {
        
        // Use this function to loop over hour blocks and determine how to style the hour blocks visible on the scheduler.
        $(".time-block").each(function() {
            let hourBlock = parseInt($(this).attr("hour"));

            if (hourBlock < currentHour) {
                $(this).addClass("past");
            }
            else if (hourBlock === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");                
                $(this).removeClass("present");                
                $(this).addClass("future");                
            }
        });
    }

    // Run the function to format the hour blocks.
    updateHourBlocks();

    // When a user clicks the save button, the computer will listen for this action, obtain the data placed in each text area box based on the hour block, and will then save this data to localStorage.
    $(".saveBtn").on("click", function() {
        let toDo = $(this).siblings(".toDo").val();
        let time = $(this).parent().attr("hour");

        localStorage.setItem(time, toDo);
    });

    // When the scheduler is pulled up on a browser, the following will load any data that has been stored in localStorage.
    $("data .toDo").val(localStorage.getItem("9 10 11 12 13 14 15 16 17"))
});