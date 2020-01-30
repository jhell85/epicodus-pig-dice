// //Business Logic
function Game() {
  this.players = [];
  this.currentId = 0;
}


Game.prototype.addPlayer = function(player){
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
      swal("You rolled a 1!", "Player two's turn!", "error");
      game.players[0].turnTotal = 0
      togglePlayer(false)
    } else { 
    game.players[0].turnTotal += roll
    }
  } else if (player === 2){
    if (roll === 1) {
      swal("You rolled a 1!", "Player one's turn!", "error");
      game.players[1].turnTotal = 0
      togglePlayer(true)
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
  if (player === 0){
    togglePlayer(false);
  } else{
    togglePlayer(true)
  }
}

function winner(){
  var player1Score = game.players[0].totalScore;
  var player2Score = game.players[1].totalScore;
  if (player1Score >= 100){
    swal("PLAYER 1 WINS!", "Congratulations!", "success");
    game.players[0].totalScore = 0;
    game.players[1].totalScore = 0;
    togglePlayer(false)
  }else if (player2Score >= 100){
    swal("PLAYER 2 WINS!", "Congratulations!", "success");
    game.players[0].totalScore = 0;
    game.players[1].totalScore = 0;
  }
}


//User Logic
var game = new Game();

function togglePlayer(boolean){
  console.log("toggle ran")
if (boolean === true){
  $(".player2module").hide();
  $(".player1module").show();
} else if (boolean === false){
  $(".player1module").hide();
  $(".player2module").show();
}
};

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
    togglePlayer(true)
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


});


