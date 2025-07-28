class Queue {
  items = [];
  front = 0;
  rear = 0;

  isEmpty() {
    return this.front === this.rear;
  }

  pop() {
    return this.items[this.front++];
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }
}

function solution(input) {
  const [M, N] = input[0].split(" ").map(Number);
  const maps = input.slice(1).map((arr) => arr.split(" ").map(Number));

  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const q = new Queue();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (maps[i][j] === 1) {
        q.push([i, j]);
      }
    }
  }

  while (!q.isEmpty()) {
    const [x, y] = q.pop();

    for (const [dx, dy] of moves) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (maps[nx][ny] === 0) {
        maps[nx][ny] = maps[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }

  let result = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (maps[i][j] === 0) {
        console.log(-1);
        return;
      }
      result = Math.max(result, maps[i][j]);
    }
  }

  console.log(result - 1);
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
