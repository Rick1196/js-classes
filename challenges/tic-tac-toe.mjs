import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let winner = false;
const players = ["x", "o"];
let player = players[0];

const displayMatrix = (mat) => {
  for (const count of mat) {
    console.log(count);
  }
};

const askInput = (prompt) => {
  let input = "";
  rl.question(prompt, function (answer) {
    console.log("Thank you for your valuable feedback:", answer);
    input = answer;
    rl.close();
  });
  const coordinates = input.split(",");
  return coordinates;
};

const validateCoordinates = (coordinates) => {
  const errors = [];
  if (coordinates.length !== 2) {
    errors.push("only two coordinates");
  }
  for (const coord of coordinates) {
    if (parseInt(coord, 10) === NaN) {
      //NaN
      errors.push(`${coord} is not a integer number`);
    } else {
      if (!(parseInt(coord, 10) < 3 && parseInt(coord, 10) >= 0)) {
        error.push(`${coord} is not a valid coordinate`);
      }
    }
  }
  return errors;
};

const updateCoordenate = (coordinates, currentplayer, mat) => {
  //coordenates = [x,y];
  // mat
  const x = coordinates[0];
  const y = coordinates[1];
  //const result = [...]
  if (mat[x][y] !== 0) {
    return [false, mat];
  } else {
    mat[x][y] = currentplayer;
    return [true, mat];
  }
};

const transponseMatrix = (mat) => {
  return mat[0].map((_, colIndex) => array.map((row) => row[colIndex]));
};

const checkRows = (currentPlayer, mat) =>{
  let isAWinner = false;
  for (const row of mat) {
    // [0,0,0]
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    const resul = row.some((element) => element !== currentPlayer);
    if (!resul) {
      isAWinner = true;
      break;
    }
  }
  return isAWinner;
}

const checkDiagonal = (currentPlayer, mat) => {
  let change = true;
  for(let x=0; x<mat.length; x++){
    if(currentPlayer !== mat[x][x]){
      change = false;
      break;
    }
  }
  //cambiar a descendente
  for(let x=0; x<mat.length; x++){
    if(currentPlayer !== mat[x][x]){
      change = false;
      break;
    }
  }
  return change;
}
const isThereAWinner = (currentPlayer, mat) => {
  let isAWinner = false;
  isAWinner = checkRows(mat);
  if(!isAWinner){
    const transponseMat = transponseMatrix([...mat]);
    isAWinner = checkRows(transponseMat);
  }
  if(!isAWinner){
    
  }

  // check row 0
  // check row 1
  // check row 2

  // check cols

  // check diagonal
};

const main = () => {
  while (!winner) {
    const coordinates = askInput(`Player ${player} Coordinates(x,y): `);
    const errors = validateCoordinates(coordinates);
    if (errors.length === 0) {
      // function to replace the 0 to player return true or false
      // const result = updateCoordenate(coordinates, player, matrix)
      //result[0] => true or false
      //result[1] => []

      const [wasUpdated, updatedMatrix] = updateCoordenate(
        coordinates,
        player,
        matrix
      );
      if (!wasUpdated) {
        console.log(`Coordinate occupied ${coordinates}`);
      } else {
        matrix = updatedMatrix;
      }
      //check if current user wins
      //}
    }
    winner = true;
  }
};
main();
//displayMatrix(matrix);
