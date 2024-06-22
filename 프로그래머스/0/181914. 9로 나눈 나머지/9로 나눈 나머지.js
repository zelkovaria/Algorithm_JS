function solution(number) {
    return Math.floor([...number].map(num => Number(num)).reduce((acc, cur) => acc += cur) % 9);
}