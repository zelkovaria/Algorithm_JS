function solution(input) {
  const N = parseInt(input[0], 10);
  const nums = input.slice(1, N + 1).map(Number);

  const stack = [];
  const answer = [];
  let current = 1;

  for (const num of nums) {
    while (current <= num) {
      stack.push(current);
      answer.push("+");
      current += 1;
    }

    if (stack[stack.length - 1] === num) {
      stack.pop();
      answer.push("-");
    } else {
      console.log("NO");
      return;
    }
  }

  console.log(answer.join("\n"));
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
