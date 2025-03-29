// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  const pairs = [];

  for (let i = 1; i <= N; i++) {
    if (N % i === 0) pairs.push([i, N / i]);
  }

  const minimal = Math.min(...pairs.map((pair) => pair[0] + pair[1]));

  return minimal * 2;
}
