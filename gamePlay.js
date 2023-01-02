function checkLoss(row, columns) {
  if (row<2|| columns<2){
    gameOver =true;
    return gameOver
  }
}

function declareLoser(user, dimension) {
  if (user === "user1" && dimension[1] < 2) {
    console.log(`${user}  you lose`)
    gameOver = true;
    return gameOver;
  }
  if (user === "user2" && dimension[0] < 2) {
    console.log(`${user} you lose`)
    gameOver = true;
    return gameOver;
  }
}

function announceGameOver(gameOver) {
  if (gameOver) {
    console.log("gameOver")
    end = true;
    setTimeout(()=>console.clear(), 10000)
    return end;
  }
}

function playerPrompt() {
  
}



module.exports = {declareLoser, announceGameOver, checkLoss}