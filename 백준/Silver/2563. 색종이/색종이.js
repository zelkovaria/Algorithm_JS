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
  const N = Number(input[0]);
  const paper = Array.from({ length: 100 }, () => Array(100).fill(0));
  let total = 0;

  for (let i = 1; i <= N; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    for (let r = x; r < x + 10; r++) {
      for (let c = y; c < y + 10; c++) {
        if (paper[r][c] === 0) {
          paper[r][c] = 1;
          total++;
        }
      }
    }
  }

  console.log(total);
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
