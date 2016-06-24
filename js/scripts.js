// back end
var pingPong = function(number){
var endResult =[];
for(var i = 1; i <= number; i++) {
if (i % 15 === 0){
  endResult.push("ping-pong");
}
else if (i % 5 === 0) {
  endResult.push("pong");
}
else if (i % 3 === 0){
  endResult.push("ping");
}
else {
  endResult.push(i);
}
}
return endResult;
};
// front end
$(document).ready(function(){
$("button#input").click(function(event){
  $("#pongy").empty();
  var number = parseInt($("input#Num").val());
  var displayNum = pingPong(number);

  $("#output").append("<ul>");
    var displayNum =.forEach(function(singleResult){
    $("#output").append("<li>" + singleResult + "</li>");
  });
  $("#output").append("<ul>");

  event.preventDefault();

});

});
