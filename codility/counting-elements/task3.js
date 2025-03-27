// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  let answer = Array.from({ length: N }, () => 0);
  let max = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) return -1;

    if (A[i] <= N) {
      answer[A[i] - 1]++;
    } else if (A[i] === N + 1) {
      answer.fill(max);
    }

    if (max < answer[A[i] - 1]) max = answer[A[i] - 1];
  }

  return answer;
}
