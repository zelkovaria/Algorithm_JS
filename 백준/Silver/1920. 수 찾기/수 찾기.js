function solution(input) {
  input.splice(0, 1);
  const setA = new Set(input.splice(0, 1)[0].split(" "));
  input.splice(0, 1);
  const compTarget = input.splice(0, 1)[0].split(" ");

  const answer = [];

  for (let i = 0; i < compTarget.length; i++) {
    if (setA.has(compTarget[i])) answer.push(1);
    else answer.push(0);
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
