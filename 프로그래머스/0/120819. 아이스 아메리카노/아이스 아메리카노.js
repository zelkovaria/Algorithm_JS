function solution(money) {
    let answer = [];
    answer[0] = Math.trunc(money/5500);
    answer[1] = money % 5500;
    return answer;
}