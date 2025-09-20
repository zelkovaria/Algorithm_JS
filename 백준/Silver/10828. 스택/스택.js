function solution(input) {
  const N = Number(input[0]);
  const lines = input.splice(1);

  const stack = [];
  const answer = [];

  for (let i = 0; i < N; i++) {
    const [cmd, num] = lines[i].split(" ");

    switch (cmd) {
      case "push":
        stack.push(Number(num));
        break;
      case "pop":
        answer.push(stack.length ? stack.pop() : -1);
        break;
      case "size":
        answer.push(stack.length);
        break;
      case "empty":
        answer.push(stack.length ? 0 : 1);
        break;
      case "top":
        answer.push(stack.length ? stack[stack.length - 1] : -1);
        break;
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
