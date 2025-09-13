function solution(input) {
  const [N, K] = input[0].trim().split(/\s+/).map(Number);

  const arr = Array.from({ length: N }, (_, i) => i + 1);
  const ans = [];

  let idx = 0;
  while (arr.length > 0) {
    idx = (idx + K - 1) % arr.length;
    const [removed] = arr.splice(idx, 1);
    ans.push(removed);
  }

  console.log(`<${ans.join(", ")}>`);
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