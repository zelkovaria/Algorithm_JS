// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  const positions = new Set();

  for (let i = 0; i < A.length; i++) {
    positions.add(A[i]);
    if (positions.size === X) return i;
  }

  return -1;
}
