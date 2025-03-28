function solution(array) {
  let count = 0;
  
  for (let num of array) {
    const str = num.toString();
    for (let ch of str) {
      if (ch === '7') count++;
    }
  }
  
  return count;
}
