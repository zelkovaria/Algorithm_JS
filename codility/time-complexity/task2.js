// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const maxNum = Math.max(...A);

  for (let i = 1; i <= maxNum; i++) {
    if (A.includes(i)) continue;
    else return i;
  }
}
