function solution(input) {
  const N = Number(input[0]);
  const goal = Number(input[1]);
  const board = Array.from({ length: N }, () => Array(N).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let x = Math.floor(N / 2);
  let y = Math.floor(N / 2);
  let num = 1;
  let dir = 0;
  let steps = 1;
  let targetPos = [x + 1, y + 1];

  board[x][y] = num;
  if (goal === num) targetPos = [x + 1, y + 1];

  while (num < N * N) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < steps; j++) {
        x += dx[dir];
        y += dy[dir];
          
        if (x < 0 || x >= N || y < 0 || y >= N) continue;
         
        num++;
        board[x][y] = num;
        if (goal === num) targetPos = [x + 1, y + 1];
      }
      dir = (dir + 1) % 4;
    }
    steps++;
  }

  board.forEach((row) => console.log(row.join(" ")));
  console.log(targetPos.join(" "));
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
