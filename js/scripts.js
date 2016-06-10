//back end
var sift=function(number){
  var list = [];
  for (var i = 2; i <= number ; i++) {
    list.push(i);
  }
  for (var ping = 2; pong <=5;pinPong = 15 ; prime++ ){
    for (var i = 0; i <= number; i++) {
      if((list[i]%prime) === 0 && list[i] !== prime){
        list.splice(i,1);
      }
    }
  }
return list;
}

//front end
$(function(){
  $("form#input").submit(function(event){
    event.preventDefault();

    var number = parseInt($("#number").val());
    var text = "number" + "text").val());  

     // output to user of action placed
    $("#output").text(sift(number)text);


  });
});
