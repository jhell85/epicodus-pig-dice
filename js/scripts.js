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
  this.turnTotal = turn;
}

function generateNumber(){
  var number = Math.floor( Math.random() * 6 ) +1;
  return number;
}

function diceRoll(player) {
  var roll = generateNumber()
  if (player === 1){
    if (roll === 1) {
      alert("You rolled a 1! Player two's turn!");
      game.players[0].turnTotal = 0
    } else { 
    game.players[0].turnTotal += roll
    }
  } else if (player === 2){
    if (roll === 1) {
      alert("You rolled a 1! Player one's turn!");
      game.players[1].turnTotal = 0
    } else { 
    game.players[1].turnTotal += roll
    }
  }
  // console.log(`player 1: ${game.players[0].turnTotal}`)
  // console.log(`player 2: ${game.players[1].turnTotal}`)
  return roll
}

function hold(player) {
  game.players[player].totalScore += game.players[player].turnTotal;
  game.players[player].turnTotal = 0;
  winner()
  console.log(`player 1: ${game.players[0].totalScore}`)
  console.log(`player 2: ${game.players[1].totalScore}`)
}
function winner(){
  var player1Score = game.players[0].totalScore;
  var player2Score = game.players[1].totalScore
  if (player1Score >= 20){
    alert("player 1 wins")
  }else if (player2Score >= 20)
    alert("player 2 wins")
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
    var player1 =  new Player(player1Name, player1Score, player1Turn);
    var player2 =  new Player(player2Name, player2Score, player2Turn);
    game.addPlayer(player1);
    game.addPlayer(player2);
  })
  $("#player1roll").click(function(){
    diceRoll(1);
    $("span#player1turntotal").html(game.players[0].turnTotal);
  })
  $("#player2roll").click(function(){
    diceRoll(2)
    $("span#player2turntotal").html(game.players[1].turnTotal);
  })
  $("#player1hold").click(function(){
    hold(0)
    $("span#player1gametotal").html(game.players[0].totalScore);
    $("span#player1turntotal").html("0");
  
  })
  $("#player2hold").click(function(){
    hold(1)
    $("span#player2gametotal").html(game.players[1].totalScore);
    $("span#player2turntotal").html("0");
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