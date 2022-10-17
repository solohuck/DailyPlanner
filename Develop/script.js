// getting todays current date 
var currentDate = moment().format("dddd, MMMM Do");
$("#currentDay").html(currentDate);
// used to get the current time 
var currentTime = moment().hour();
// all the numbers that represent 9am - 5pm
hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var container = $('.container');

for (let i = 0; i < hours.length; i++) {
    var outsideDiv = document.createElement('div')
    outsideDiv.classList.add('row', 'time-block')
    // had to leave this weird space so that the time layout would look correct
    outsideDiv.innerHTML =`<div class="col-md-1 hour">
    
${getHourLabel(hours[i])} 
    </div>
    <textarea class="col-md-10 description ${getTimeColor(hours[i])}"> ${localStorage.getItem(hours[i]) ||""}
    </textarea><button class="btn saveBtn col-md-1" data-hour=${hours[i]}><i class="fas fa-save"></i></button>`
    container.append(outsideDiv)
}
// click funtion to see if the .btn is clicked 
$(".btn").on("click", function (event) {
    var hour = event.currentTarget.dataset.hour;
    var text = $(this).siblings(".description").val();
    localStorage.setItem(hour, text);
})
// function to set the correct color 
function getTimeColor(hour){
    if (hour < currentTime) return "past"
    else if (hour == currentTime) return "present"
    else return "future"
}
// gives the 9-17 numbers the correct label
function getHourLabel(hour){
    switch (hour) {
        case 9:
            return "9 AM"
        case 10:
            return "10 AM"
        case 11:
            return "11 AM"
        case 12:
            return "12 PM"
        case 13:
            return "1 PM"
        case 14:
            return "2 PM"
        case 15:
            return "3 PM"
        case 16:
            return "4 PM"
        case 17:
            return "5 PM"
    }
}
