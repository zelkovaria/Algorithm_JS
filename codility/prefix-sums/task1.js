// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let eastCount = 0;
  let answer = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) eastCount++;
    else if (A[i] === 1) {
      answer += eastCount;

      if (answer > 1000000000) return -1;
    }
  }

  return answer;
}
