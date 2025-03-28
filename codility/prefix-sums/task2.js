// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
  return Math.floor(B / K) - Math.floor((A - 1) / K);
}
