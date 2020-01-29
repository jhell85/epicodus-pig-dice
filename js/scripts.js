// //Business Logic
function startGame(player1Name, player2Name) {
  var player1 = player1Name;
  player1.total = 0;
  player2.name = player2Name;
  player2.total = 0;
}
function diceRoll(){
  var roll = Math.floor( Math.random() * 6 ) +1;
  console.log(roll)
  if (roll === 1) {
    alert("You rolled a 1! Turn over!")
  }
  return roll;
}

// Game.prototype.assignId = function() {
//   this.currentId += 1
//   return this.currentId
// }

// Game.prototype.addPlayer = function() {
  
// }






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
    startGame(player1Name, player2Name)
  })
  $("#player1roll").click(function(){
    diceRoll();
    $("span#player1turntotal").html(diceRoll);
  })
  $("#player2roll").click(function(){
    diceRoll();
    $("span#player2turntotal").html(diceRoll);
    
  })
})