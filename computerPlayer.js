let columnsPrime = [];
let rowsPrime = [];

  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }
function generatePrimes(limit, array){
  for (let i = 2; i <limit; i++) {
    if (isPrime(i)) {
      array.push(i)
      
    }
  }
  return array;
}

function smartMove(direction) {
  
  if (direction === rows) {
    let result =rowsPrime[0]
    rowsPrime.shift()
    //console.log(rowsPrime);
    return result;
    
  }
  //if (direction === columns)
  
}
function slice(direction, move) {
  let result = direction-move;
  console.log(`Cutting away ${move} leaves ${result}`)
  return result;
}

//let rowMove =prompt("row move")
//let columnMove = prompt("row move")


function playGame() {
  while (rowsPrime.length) {
   let columnMove = prompt("column move")
   console.log(slice(columns, columnMove))
  // console.log('The smart move is' + smartMove(rows))
   rowMove =smartMove(rows)
   console.log(slice(rows, rowMove))
    
  }
}


generatePrimes(columns, columnsPrime)
generatePrimes(rows, rowsPrime)

playGame();