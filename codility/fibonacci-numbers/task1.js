function solution(A) {
  const N = A.length;

  const fibs = [];
  fibs.push(1);
  fibs.push(2);

  while (true) {
    const nextFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    if (nextFib > N + 1) break;
    fibs.push(nextFib);
  }

  const queue = [];
  queue.push({ pos: -1, jumps: 0 });
  const visited = new Array(N).fill(false);

  while (queue.length > 0) {
    const { pos, jumps } = queue.shift();

    for (let i = 0; i < fibs.length; i++) {
      const jumpLength = fibs[i];
      const nextPos = pos + jumpLength;

      if (nextPos === N) {
        return jumps + 1;
      }

      if (nextPos < N && A[nextPos] === 1 && !visited[nextPos]) {
        visited[nextPos] = true;
        queue.push({ pos: nextPos, jumps: jumps + 1 });
      }
    }
  }

  return -1;
}
