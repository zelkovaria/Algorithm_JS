function solution(arr) {
    if (arr.length === 1) return [-1];
    minNum = Math.min(...arr);
    return arr.filter(num => num !== minNum);
}