function solution(input) {
  const testCount = parseInt(input.shift(), 10);
  const answer = [];

  for (let i = 0; i < testCount; i++) {
    const commands = input.shift();
    const n = parseInt(input.shift(), 10);
    let arr = JSON.parse(input.shift(), 10);

    let isReversed = false;
    let isError = false;

    for (const cmd of commands) {
      if (cmd === "R") {
        isReversed = !isReversed;
      } else if (cmd === "D") {
        if (arr.length === 0) {
          isError = true;
          break;
        } else {
          if (isReversed) {
            arr.pop();
          } else {
            arr.shift();
          }
        }
      }
    }

    if (isError) {
      answer.push("error");
    } else {
      if (isReversed) arr.reverse();
      answer.push(`[${arr.join(",")}]`);
    }
  }

  return answer.join("\n");
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
