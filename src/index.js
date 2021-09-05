module.exports = function solveSudoku(matrix) {
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      if(matrix[i][j] === 0){
        for(let q = 1; q <= 9; q++){
          if(mat(matrix, i, j, q)){
            matrix[i][j] = q;
            if(solveSudoku(matrix)){
              return matrix;
            } else {
              matrix[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return matrix;
}

function mat (matrix, strok, stolb, num){
  for(let index = 0; index < 9; index++){
    let x = 3 * Math.floor(strok / 3) + Math.floor(index / 3);
    let y = 3 * Math.floor(stolb / 3) +index % 3;
    if(matrix[strok][index] === num || matrix [index][stolb] === num || matrix[x][y] === num){
      return false;
    }
  }
  return true;
}
