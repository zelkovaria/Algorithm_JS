// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  const N = A.length;
  let alive = 0;
  const downstreamStack = [];

  for (let i = 0; i < N; i++) {
    if (B[i] === 1) {
      downstreamStack.push(A[i]);
    } else {
      let fishAlive = true;
      while (downstreamStack.length > 0) {
        const downstreamFish = downstreamStack[downstreamStack.length - 1];
        if (downstreamFish > A[i]) {
          fishAlive = false;
          break;
        } else {
          downstreamStack.pop();
        }
      }
      if (fishAlive) alive++;
    }
  }

  alive += downstreamStack.length;

  return alive;
}
