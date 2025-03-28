// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const set = new Set();

  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
  }

  return set.size;
}
