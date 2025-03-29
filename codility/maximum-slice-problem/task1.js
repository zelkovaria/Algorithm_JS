// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let minPrice = A[0];
  let maxProfit = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] < minPrice) minPrice = A[i];
    else {
      maxProfit = Math.max(maxProfit, A[i] - minPrice);
    }
  }

  return maxProfit;
}
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let minPrice = A[0];
  let maxProfit = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] < minPrice) minPrice = A[i];
    else {
      maxProfit = Math.max(maxProfit, A[i] - minPrice);
    }
  }

  return maxProfit;
}
