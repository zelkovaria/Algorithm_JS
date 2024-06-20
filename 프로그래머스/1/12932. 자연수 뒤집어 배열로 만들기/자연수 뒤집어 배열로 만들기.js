function solution(n) {
    var answer = [...n.toString()];
    answer = answer.map(Number);

    return answer.reverse();
}