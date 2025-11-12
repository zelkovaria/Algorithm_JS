class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  first() {
    return this.items[this.front];
  }

  last() {
    return this.items[this.rear];
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(input) {
  // 정점수 간선수 탐색_시작_번호
  const [N, M, V] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].trim().split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let v = 1; v <= N; v++) graph[v].sort((x, y) => x - y);

  const visitedD = Array(N + 1).fill(false);
  const dfsOrder = [];

  function dfs(u) {
    visitedD[u] = true;
    dfsOrder.push(u);

    for (const w of graph[u]) {
      if (!visitedD[w]) dfs(w);
    }
  }

  const visitedB = Array(N + 1).fill(false);
  const bfsOrder = [];

  function bfs(start) {
    const q = new Queue();
    q.push(start);
    visitedB[start] = true;

    while (!q.isEmpty()) {
      const u = q.pop();
      bfsOrder.push(u);

      for (const w of graph[u]) {
        if (!visitedB[w]) {
          visitedB[w] = true;
          q.push(w);
        }
      }
    }
  }

  dfs(V);
  bfs(V);

  console.log(dfsOrder.join(" "));
  console.log(bfsOrder.join(" "));
}

const input = [];
require("readline")
  .createInterface({ input: process.stdin, output: process.stdout })
  .on("line", (line) => input.push(line))
  .on("close", () => {
    solution(input);
    process.exit();
  });
