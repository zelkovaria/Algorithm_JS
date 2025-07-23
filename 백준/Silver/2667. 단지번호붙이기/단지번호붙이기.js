function solution(input) {
  const N = Number(input[0]);
  const map = input.slice(1).map((line) => line.split("").map(Number));
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const countList = [];

  function bfs(x, y) {
    const queue = [[x, y]];
    visited[x][y] = true;
    let count = 1;

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();

      for (let dir = 0; dir < 4; dir++) {
        const nx = cx + dx[dir];
        const ny = cy + dy[dir];

        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < N &&
          !visited[nx][ny] &&
          map[nx][ny] === 1
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          count++;
        }
      }
    }

    return count;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && map[i][j] === 1) {
        countList.push(bfs(i, j));
      }
    }
  }

  countList.sort((a, b) => a - b);
  console.log(countList.length);
  countList.forEach((count) => console.log(count));
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
solution(input);
