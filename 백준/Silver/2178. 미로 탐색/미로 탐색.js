class Queue {
  items = [];
  front = 0;
  rear = 0;

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

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const maps = input.slice(1).map((row) => row.split("").map(Number));

  const moves = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const dist = Array.from({ length: N }, () => Array(M).fill(-1));

  function bfs(start) {
    const q = new Queue();
    q.push(start);
    dist[start[0]][start[1]] = 1;

    while (!q.isEmpty()) {
      const here = q.pop();

      for (const [dx, dy] of moves) {
        const row = here[0] + dx;
        const column = here[1] + dy;

        if (row < 0 || row >= N || column < 0 || column >= M) {
          continue;
        }

        if (maps[row][column] === 0) continue;

        if (dist[row][column] === -1) {
          q.push([row, column]);
          dist[row][column] = dist[here[0]][here[1]] + 1;
        }
      }
    }

    return dist;
  }

  bfs([0, 0]);

  return dist[N - 1][M - 1];
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
    console.log(solution(input));
    process.exit();
  });
