function solution(A) {
  const N = A.length;
  const answer = [];

  for (let i = 0; i < N; i++) {
    let nonDivisorCount = 0;

    for (let j = 0; j < N; j++) {
      if (A[i] % A[j] !== 0) {
        nonDivisorCount++;
      }
    }
    answer.push(nonDivisorCount);
  }

  return answer;
}
