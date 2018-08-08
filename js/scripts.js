$(document).ready(function(){
  $("#nameForm").submit(function(event){

    var nameInput = $("input#inputName").val();
    $(".inputName").text(nameInput);
    $("#story").show();

    event.preventDefault();
  });
//Shout Machine JS
  $("#Uppercase").submit(function(event){

    var uppercaseText = $("input#uppercaseText").val().toUpperCase();
    $("#shoutMachine").text(uppercaseText);

  event.preventDefault();
  });
});
