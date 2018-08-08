$(document).ready(function(){
  $("#nameForm").submit(function(event){

    var nameInput = $("input#inputName").val();
    $(".inputName").text(nameInput);







    $("#story").show();


  event.preventDefault();

});});
