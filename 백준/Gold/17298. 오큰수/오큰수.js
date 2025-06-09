function solution(input) {
  const N = parseInt(input[0], 10);
  const nums = input[1].split(" ").map(Number);
  const answer = Array(N).fill(-1);
  const stack = [];

  for (let i = 0; i < N; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      const index = stack.pop();
      answer[index] = nums[i];
    }
    stack.push(i);
  }

  console.log(answer.join(" "));
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
