// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const totalSum = A.reduce((acc, cur) => acc + cur, 0);
  let minDiff = Infinity;
  let leftSum = 0;

  for (let i = 0; i < A.length - 1; i++) {
    leftSum += A[i];
    const rightSum = totalSum - leftSum;
    const diff = Math.abs(leftSum - rightSum);
    if (diff < minDiff) minDiff = diff;
  }

  return minDiff;
}
