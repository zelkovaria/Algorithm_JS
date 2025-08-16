function solution(input) {
  const N = Number(input[0]);
  const board = input.slice(1).map((line) => line.split(""));

  let maxCount = 0;

  function getMaxCandyCount(arr) {
    let max = 1;

    for (let i = 0; i < N; i++) {
      let row = 1;
      let col = 1;

      for (let j = 1; j < N; j++) {
        if (arr[i][j] === arr[i][j - 1]) {
          row++;
        } else {
          row = 1;
        }
        max = Math.max(max, row);

        if (arr[j][i] === arr[j - 1][i]) {
          col++;
        } else {
          col = 1;
        }
        max = Math.max(max, col);
      }
    }

    return max;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j + 1 < N) {
        [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
        maxCount = Math.max(maxCount, getMaxCandyCount(board));
        [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
      }

      if (i + 1 < N) {
        [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
        maxCount = Math.max(maxCount, getMaxCandyCount(board));
        [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
      }
    }
  }

  console.log(maxCount);
}

const input = [];
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    solution(input);
    process.exit();
  });
