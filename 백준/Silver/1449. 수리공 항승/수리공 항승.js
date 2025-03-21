function sol(input) {
  const [firstLine, ...rest] = input.split("\n");
  const count = Number(firstLine.split(" ")[0]);
  const tapeLength = Number(firstLine.split(" ")[1]);

  let answer = 0;
  let index = 0;

  const leaks = rest[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  while (index < count) {
    answer++;
    const coverLimit = leaks[index] + tapeLength - 1;

    while (index < count && leaks[index] <= coverLimit) {
      index++;
    }
  }

  return answer;
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
    console.log(sol(input.join("\n")));
    process.exit();
  });
