function solution(numbers) {
    let sum = numbers.reduce((prev, cur) => prev+cur);
    return 45-sum;
}