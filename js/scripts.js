
$(document).ready(function() {
  var number = parseInt(prompt("Please enter a number"));
    event.preventDefault();


for(index = 1; index <= number; index += 1) {
    if (index % 15 === 0) {
        $("#list").append("<li>" + "ping-pong" + "</li>");
    } else if (index % 3 === 0) {
        $("#list").append("<li>" + "ping" + "</li>");
    } else if (index % 5 === 0) {
        $("#list").append("<li>" + "pong" + "<li>");
    } else {
        $("#list").append("<li>" + "index" + "</li>");
    }
}


});
