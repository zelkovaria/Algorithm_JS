function solution(input) {
  let sugar = Number(input);
  let count = 0;

  while (sugar >= 0) {
    if (sugar % 5 === 0) {
      count += sugar / 5;
      return count;
    }
    sugar -= 3;
    count++;
  }

  return -1;
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
