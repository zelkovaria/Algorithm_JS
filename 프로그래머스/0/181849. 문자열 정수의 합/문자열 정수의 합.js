function solution(num_str) {
    return [...num_str].map(char => Number(char)).reduce((acc, cur) => acc += cur);
}