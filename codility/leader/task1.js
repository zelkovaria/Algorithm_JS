// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const answer = [];
  const numInfo = {};

  for (let i = 0; i < A.length; i++) {
    if (!numInfo[A[i]]) {
      numInfo[A[i]] = [];
    }
    numInfo[A[i]].push(i);
  }

  for (const [key, value] of Object.entries(numInfo)) {
    if (value.length >= Math.ceil(A.length / 2)) return value[0];
  }
}
