function solution(input) {
  const [N, queue] = input;
  const waitingTime = queue
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const totalTime = [];
  let currentTime = 0;

  for (let i = 0; i < N; i++) {
    currentTime += waitingTime[i];
    totalTime.push(currentTime);
  }

  return totalTime.reduce((acc, cur) => (acc += cur));
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
