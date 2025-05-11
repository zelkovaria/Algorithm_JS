function solution(input) {
  const testCount = parseInt(input.shift(), 10);
  const taste = input.map((string) => string.split(" ").map(Number));

  let minDiff = Infinity;
  function getDiff(index, sour, bitter, count) {
    if (index === testCount) {
      if (count > 0) {
        minDiff = Math.min(minDiff, Math.abs(sour - bitter));
      }
      return;
    }

    getDiff(
      index + 1,
      sour * taste[index][0],
      bitter + taste[index][1],
      count + 1
    );

    getDiff(index + 1, sour, bitter, count);
  }

  getDiff(0, 1, 0, 0);

  return minDiff;
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
