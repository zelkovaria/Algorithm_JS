function solution(input) {
  const testCase = Number(input.shift());
  const move = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  const results = [];

  let cursor = 0;

  for (let t = 0; t < testCase; t++) {
    const [M, N, K] = input[cursor++].split(" ").map(Number);

    const farm = Array.from({ length: N }, () => Array(M).fill(0));
    const visited = Array.from({ length: N }, () => Array(M).fill(false));

    for (let i = 0; i < K; i++) {
      const [x, y] = input[cursor++].split(" ").map(Number);
      farm[y][x] = 1;
    }

    function dfs(x, y) {
      visited[y][x] = true;

      for (const [dy, dx] of move) {
        const ny = y + dy;
        const nx = x + dx;

        if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
          if (farm[ny][nx] === 1 && !visited[ny][nx]) {
            dfs(nx, ny);
          }
        }
      }
    }

    let count = 0;

    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (farm[y][x] === 1 && !visited[y][x]) {
          dfs(x, y);
          count++;
        }
      }
    }

    results.push(count);
  }

  return results.join("\n");
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
