function solution(input) {
  const regions = parseInt(input.shift(), 10);
  const requiredBudget = input[0].split(" ").map(Number);
  const totalBudget = parseInt(input[1], 10);

  let start = 0;
  let end = Math.max(...requiredBudget);
  let result = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const total = requiredBudget.reduce(
      (acc, cur) => acc + Math.min(cur, mid),
      0
    );

    if (total <= totalBudget) {
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
