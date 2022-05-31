//moment.js 
var m = moment();

//current date and time
$("#currentDay").text(moment().format("LL"));
var currentTime = moment().hours();

// color change 
function colorChange() {
    var currentTime = moment().hours();
    console.log("Current Time" + currentTime);


    // past, present, future blocks if else statment. similar to display state from timed quiz
    $("textarea").each(function () {
       
        var time = parseInt($(this).parent().attr("id").substring(4));
        console.log(currentTime, time);

        if (currentTime > time) {
           
            $(this).addClass("past");

        } else if (currentTime < time) {
            $(this).addClass("future");
            
        } else {
            
            $(this).addClass("present");
            
        }
    });
}
    colorChange();
    
// save button function w/ local storage
var dailyText;
var dailyTime;

$("button").on("click", function (event) {

    localStorage.setItem($(event.target).parent().attr("id"), $(event.target).parent().children().eq(1).val());
    // dailyText = $(this).siblings(".input").val("");
    // console.log(dailyTime);
    // dailyTime = $(this).siblings(".input").text();
    // console.log(dailyTime);
    // localStorage.setItem(dailyTime,JSON.stringify(dailyText));

  
});






// function for what the currrent time is





// local storage
for (i = 9; i <= 17; i++) {
$("#hour"+i).children().eq(1).val(localStorage.getItem("hour" +i));

}




