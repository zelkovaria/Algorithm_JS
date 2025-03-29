// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  let answer = [];
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) answer.push(i);
  }

  return answer.length;
}
