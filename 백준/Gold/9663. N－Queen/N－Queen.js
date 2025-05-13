function solution(input) {
  const N = parseInt(input, 10);

  const answer = search(
    N,
    0,
    Array(N).fill(false),
    Array(N * 2).fill(false),
    Array(N * 2).fill(false)
  );

  return answer;
}
function search(N, y, width, diagonal1, diagonal2) {
  let count = 0;

  if (N === y) count++;
  else {
    for (let i = 0; i < N; i++) {
      if (width[i] || diagonal1[i + y] || diagonal2[i - y + N]) continue;

      width[i] = diagonal1[i + y] = diagonal2[i - y + N] = true;

      count += search(N, y + 1, width, diagonal1, diagonal2);

      width[i] = diagonal1[i + y] = diagonal2[i - y + N] = false;
    }
  }

  return count;
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
