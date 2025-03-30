// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  const N = A.length;
  let endPoint = -Infinity;
  let count = 0;

  for (let i = 0; i < N; i++) {
    if (A[i] > endPoint) {
      endPoint = B[i];
      count++;
    }
  }

  return count;
}
