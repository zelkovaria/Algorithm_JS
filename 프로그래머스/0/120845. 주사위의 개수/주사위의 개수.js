function solution(box, n) {
    return box.map(num => parseInt(num/n)).reduce((acc, cur) => acc * cur, 1);
}