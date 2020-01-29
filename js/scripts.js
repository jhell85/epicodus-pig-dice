// //Business Logic
function Game() {
  this.players = [];
  this.currentId = 0;
}

Game.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Game.prototype.addPlayer = function(player){
  player.id = this.assignId();
  this.players.push(player);
}

// function Player(name) {
//   this.name = name;
//   this.turnScore = 0
//   this.totalScore = 0
// }
function Player(name, totalScore, turn) {
  this.name = name;
  this.totalScore = totalScore;
  this.turn = turn;
}

function diceRoll(){
  var roll = Math.floor( Math.random() * 6 ) +1;
  console.log(roll)
  if (roll === 1) {
    alert("You rolled a 1! Turn over!")
  }
  return roll;
}


//User Logic
var game = new Game();

$(document).ready(function(){
  $("#nameForm").submit(function(event){
    event.preventDefault();
    var player1Name = $("#Player1name").val();
    var player2Name = $("#Player2name").val();
    var player1Score = 0;
    var player2Score = 0;
    var player1Turn = 0;
    var player2Turn = 0;
    $("#player1namedisplay").append(player1Name);
    $("#player2namedisplay").append(player2Name);
    $("#nameForm").hide();
    $(".game").show();
    var player1 =  new Player(player1Name, player1Score, player1Turn)
    var player2 =  new Player(player2Name, player2Score, player2Turn)
    game.addPlayer(player1);
    game.addPlayer(player2);

    console.log(game.players)
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



//Graveyard ---------------------------------------------------


// Player.prototype.addPlayer = function(player) {
//   player.id = this.assignId();
// }

// Game.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }


// function Player(name){
//   this.name = name;
//   this.turnScore = 0;
//   this.totalScore = 0;
// }

// function startGame(player1Name, player2Name) {
//   var player1 = player1Name;
//   player1.total = 0;
//   player2.name = player2Name;
//   player2.total = 0;
// }


// Game.prototype.assignId = function() {
//   this.currentId += 1
//   return this.currentId
// }

// Game.prototype.addPlayer = function() {
  
// }