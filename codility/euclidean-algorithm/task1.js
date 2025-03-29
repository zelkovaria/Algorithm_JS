// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, M) {
  function gdb(a, b) {
    if (b === 0) return a;
    return gdb(b, a % b);
  }

  const g = gdb(N, M);

  return N / g;
}
