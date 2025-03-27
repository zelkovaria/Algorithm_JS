// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  const nums = new Set();
  const maxNum = Math.max(...A);

  for (let i = 0; i < A.length; i++) {
    nums.add(i + 1);
  }

  if (nums.size === maxNum) return 1;
  else return 0;
}
