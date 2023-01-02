function cakeTest(columns, rows) {
  console.log(`We now have a cookie of ${columns}columns x ${rows}rows`);

}

function setCake() {
  let sizing = []
  sizing[0] = prompt("Grandma is going to score the cake. How many columns should she make?");
  sizing[1] = prompt("Grandma is going to score the cake. How many rows should she make?");

  console.log(sizing)
  return sizing;
}
function validCuts(columns, row) {

}

function explainer() { }

function cakeMaker(column, row) {
  cake = []
  let cookie = 0;
  for (let i = 0; i <row; i++) {
  let columns = [];
    
    for (let j = 0; j <column; j++) {
      columns.push(` [ * ]  `);
      cookie ++;  
    }
    //cake.push(i)
    cake.push(columns);
     columns = [];
    
   
    
  }
  for (let z=0;z<cake.length;z++) {
    if (cake[z]) {
    console.log(cake[z])
    }
  }

return cake;
}

module.exports = { cakeTest, setCake, cakeMaker }
