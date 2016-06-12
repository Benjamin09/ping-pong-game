// back end
// for(index = 1; index <= number; index += 1) {
//     if (index % 15 === 0) {
//         $("#list").append("<li>" + "ping-pong" + "</li>");
//     } else if (index % 3 === 0) {
//         $("#list").append("<li>" + "ping" + "</li>");
//     } else if (index % 5 === 0) {
//         $("#list").append("<li>" + "pong" + "<li>");
//     } else {
//         $("#list").append("<li>" + "index" + "</li>");
//
// for (var x=1; x <= 100; x++) {
//     var skip = 0;
//     if (x % 3 === 0) {
//         document.write('ping');
//         skip = 1;
//     }
//     if (x % 5 === 0) {
//         document.write('pong');
//         skip = 1;
//     }
//     if (!skip) {
//         document.write(x);
//     }
//     document.write('<br>');
// }

// back end
var pingPong = function(number){
  var endResult =[];

  for(var i = 1;) i <= number; i++) {
    if (i % 3 === 0){
      endResult.push("ping");
    }
    else if (i % 5 === 0) {
      endResult.push("pong");
    }
    else if (i % 15 === 0){
      endResult.push("ping-pong");
    }
    else {
      endResult.push(i);
    }
  }
  return endResult;
};
  // front end
  $(document).ready(function(){
    $("button#input").submit(function(event){
      $("#pongy").empty();
      var number = parseInt($("input#Num").val());
      var displayNum = pingPong(number);

      $("#output").append("<ul>");
        displayNum.forEach(function(singleResult){
      $("#output").append("<li>" + singleResult + "</li>");
  });
      $("#output").append("<ul>");

      event.preventDefault();
  });

});
