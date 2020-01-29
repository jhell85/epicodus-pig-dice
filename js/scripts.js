// //Business Logic
function Game() {
  this.players = []
  this.currentId = 0
}

Game.prototype.assignId = function() {
  this.currentId += 1
  return this.currentId
}






//User Logic
$(document).ready(function(){
  $("#nameForm").submit(function(event){
    event.preventDefault();
    var player1Name = $("#Player1name").val();
    var player2Name = $("#Player2name").val();
    $("#player1namedisplay").append(player1Name);
    $("#player2namedisplay").append(player2Name);
    $("#nameForm").hide();
    $(".game").show();

    
  })
})