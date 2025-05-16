function solution(input) {
  const N = parseInt(input.shift(), 10);
  const trees = input.map((num) => num.split(" ").map(Number));

  for (let i = N - 2; i >= 0; i--) {
    for (let j = 0; j < trees[i].length; j++) {
      trees[i][j] += Math.max(trees[i + 1][j], trees[i + 1][j + 1]);
    }
  }

  return trees[0][0];
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
