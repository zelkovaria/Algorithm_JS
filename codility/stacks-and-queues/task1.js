// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  const stack = [];
  const matching = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "{" || S[i] === "[" || S[i] === "(") {
      stack.push(S[i]);
    } else if (S[i] === "}" || S[i] === "]" || S[i] === ")") {
      if (stack.length === 0) return 0;

      const top = stack.pop();
      if (top !== matching[S[i]]) return 0;
    }
  }

  return stack.length === 0 ? 1 : 0;
}
