function solution(input) {
  const computerNum = parseInt(input.splice(0, 1), 10);
  const computerPair = parseInt(input.splice(0, 1), 10);
  const connectedComputers = input.map((pair) =>
    pair.split(" ").map((char) => Number(char))
  );
  const visited = Array(computerNum).fill(false);
  let answer = 0;

  const graph = Array.from({ length: computerNum }, () =>
    Array(computerNum).fill(0)
  );
  for (const [a, b] of connectedComputers) {
    graph[a - 1][b - 1] = 1;
    graph[b - 1][a - 1] = 1;
  }

  function dfs(node) {
    visited[node] = true;

    for (let i = 0; i < computerNum; i++) {
      if (graph[node][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  dfs(0);

  return visited.filter(Boolean).length - 1;
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
