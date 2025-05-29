function solution(input) {
  // const N = parseInt(input.shift(), 10);
  const [N, M] = input[0].split(" ").map(Number);
  const trees = input[1].split(" ").map(Number);

  let start = 0;
  let end = Math.max(...trees);
  let result = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const total = trees.reduce((acc, cur) => {
      return acc + (cur > mid ? cur - mid : 0);
    }, 0);

    if (total >= M) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(result);
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
