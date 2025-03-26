class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function isValidMove(y, x, n, m, maze) {
  return y >= 0 && x >= 0 && y < n && x < m && maze[y][x] === "1";
}

function appendToQueue(y, x, time, visited, queue) {
  if (!visited[y][x]) {
    visited[y][x] = true;
    queue.push([y, x, time + 1]);
  }
}

function solution(input) {
  const [firstLine, ...maze] = input;
  const [n, m] = firstLine.split(" ").map(Number);
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const q = new Queue();

  q.push([0, 0, 1]);
  visited[0][0] = true;

  while (!q.isEmpty()) {
    const [y, x, time] = q.pop();

    if (y === n - 1 && x === m - 1) {
      return time;
    }

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (!isValidMove(ny, nx, n, m, maze)) continue;

      appendToQueue(ny, nx, time, visited, q);
    }
  }
  return -1;
}

const maps = [];
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    maps.push(line);
  })
  .on("close", () => {
    console.log(solution(maps));
    process.exit();
  });
