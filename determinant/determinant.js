/**
 * 计算n阶行列式
 * @param {Array} square 方阵
 * @returns {Number}
 */
function det(square) {
  // 方阵约束
  if (square.length !== square[0].length) {
    throw new Error("传入的方阵数据错误");
  }
  // 方阵阶数
  let n = square.length;

  let result = 0;
  if (n > 3) {
    // n 阶
    for (let column = 0; column < n; column++) {
      // 去掉第 0 行第 column 列的矩阵
      let matrix = new Array(n - 1)
        .fill(0)
        .map((arr) => new Array(n - 1).fill(0));
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
          if (j < column) {
            matrix[i][j] = square[i + 1][j];
          } else {
            matrix[i][j] = square[i + 1][j + 1];
          }
        }
      }
      result += square[0][column] * Math.pow(-1, 0 + column) * det(matrix);
    }
  } else if (n === 3) {
    // 3 阶
    result =
      square[0][0] * square[1][1] * square[2][2] +
      square[0][1] * square[1][2] * square[2][0] +
      square[0][2] * square[1][0] * square[2][1] -
      square[0][2] * square[1][1] * square[2][0] -
      square[0][1] * square[1][0] * square[2][2] -
      square[0][0] * square[1][2] * square[2][1];
    console.log(
      ` ${square[0][0]} * ${square[1][1]} * ${square[2][2]} +
        ${square[0][1]} * ${square[1][2]} * ${square[2][0]} +
        ${square[0][2]} * ${square[1][0]} * ${square[2][1]} -
        ${square[0][2]} * ${square[1][1]} * ${square[2][0]} -
        ${square[0][1]} * ${square[1][0]} * ${square[2][2]} -
        ${square[0][0]} * ${square[1][2]} * ${square[2][1]}`
    );
  } else if (n === 2) {
    // 2 阶
    result = square[0][0] * square[1][1] - square[0][1] * square[1][0];
  } else if (n === 1) {
    // 1 阶
    result = square[0][0];
  }
  console.log(result);
  return result;
}
det([
  [2, -4, -2],
  [-1, 1, 1],
  [2, -9, 1],
]);
