// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, M, A) {
  const N = A.length;
  const candidateSum = [];
  const dividedA = {};

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const block1 = A.slice(0, i);
      const block2 = A.slice(i, j);
      const block3 = A.slice(j);

      dividedA[`${i}-${j}`] = [block1, block2, block3];
    }
  }

  for (const [key, value] of Object.entries(dividedA)) {
    let maxNum = -Infinity;
    let sum = 0;

    value.map((arr) => {
      if (arr.length > 0) {
        sum = arr.reduce((acc, cur) => acc + cur);
      } else if (arr.length === 0) {
        sum = 0;
      }
      if (sum > maxNum) {
        maxNum = sum;
      }
    });
    candidateSum.push(maxNum);
  }

  return Math.min(...candidateSum);
}
