let cake = [];
let rows = [];
let bigBreak = false;
let newCake = [];
let gameOver = false;
let end = false;
let piecesOfCake = [];
let cakeDimensions = [];

let cakeLibrary = require('./cakeLibrary')
let cakeMaker = cakeLibrary.cakeMaker;

let movesLibrary = require('./movesLibrary')
let horizontalCutCake = movesLibrary.horizontalCutCake;
let verticalCut = movesLibrary.verticalCut;

let gamePlay = require('./gamePlay');
let declareLoser = gamePlay.declareLoser;

let announceGameOver = gamePlay.announceGameOver;
let checkLoss = gamePlay.checkLoss;



function readyPlayerOne(user, cakeDimensions = [], gameOver) {
  if (!gameOver) {
    let cut = prompt('User 1: After which row would you like to slice');
    console.log(`slicing at ${cut}`);
    horizontalCutCake(cut, cakeDimensions);
    cakeMaker(...cakeDimensions);
  }
    gameOver = declareLoser("user2", cakeDimensions)
    announceGameOver(gameOver)

  }

function readyPlayerTwo(user, cakeDimensions, gameOver) {
    if (!gameOver) {
      let cut2 = prompt('User 2: After which column would you like to slice');
      movesLibrary.verticalCut(cut2, cakeDimensions);
      console.log(cakeDimensions);
      cakeMaker(...cakeDimensions);
    }
    gameOver = declareLoser("user1", cakeDimensions)
    announceGameOver(gameOver)
  }

function startGame() {
cakeDimensions = cakeLibrary.setCake();
cakeMaker(...cakeDimensions)
}
function playGame(gameOver) {
  while (!gameOver) {

    readyPlayerOne("user1", cakeDimensions, gameOver)
    readyPlayerTwo("user2", cakeDimensions, gameOver)
    gameOver = checkLoss(...cakeDimensions)
  };
}


startGame();
playGame(gameOver)