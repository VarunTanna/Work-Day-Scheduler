//moment.js 
var m = moment();

//current date and time
$("#currentDay").text(moment().format("LLLL"));


// color change 
$(document).ready(function () {
    colorChange();
    renderText();
});

function colorChange() {
    var currentTime = moment().hours();
    console.log("Current Time" + currentTime);


// past, present, future blocks if else statment. similar to display state from timed quiz
$(".input").each(function () {
    var time = parseInt($(this).attr("id"));
    console.log(time);

        if (currentTime > time) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");

         } else if (currentTime < time) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
         } else {
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");
         }
    });
}

// save button function v local storage
var dailyText;
var dailyTime;

$(".saveBtn").click( function(){
    dailyText = $(this).siblings(".input").val("");
    console.log(dailyTime);
    dailyTime = $(this).siblings(".input").text();
    console.log(dailyTime);
    localStorage.setItem(dailyTime,JSON.stringify(dailyText));
});


// function for what the currrent time is





// local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17.description").val(localStorage.getItem("hour17"));
