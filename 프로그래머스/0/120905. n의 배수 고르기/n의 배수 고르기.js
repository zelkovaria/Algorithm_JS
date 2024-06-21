function solution(n, numlist) {
    let answer = [];
    numlist.map((num) => num % n === 0 ? answer.push(num) : null);
    return answer;
}