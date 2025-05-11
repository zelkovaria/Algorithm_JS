function solution(input) {
  const studentsNum = parseInt(input.shift(), 10);
  const numbers = input;
  const set = new Set();

  for (let j = 1; j <= numbers[0].length; j++) {
    for (let i = 0; i < studentsNum; i++) {
      set.add(numbers[i].slice(-j));
    }

    if (set.size === studentsNum) return j;
    set.clear();
  }
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
