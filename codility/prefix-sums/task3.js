// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
  const DNAInfo = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };
  let sArr = [...S];
  let answer = [];

  for (let i = 0; i < S.length; i++) {
    sArr[i] = DNAInfo[sArr[i]];
  }

  for (let i = 0; i < P.length; i++) {
    let minNum = Infinity;

    for (let j = P[i]; j <= Q[i]; j++) {
      if (sArr[j] < minNum) minNum = sArr[j];

      if (minNum === 1) break;
    }

    answer.push(minNum);
  }

  return answer;
}
