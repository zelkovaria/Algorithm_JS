function solution(s) {
    var answer = s[0] === '-' ? -parseInt(s.slice(1)) : parseInt(s)
    return answer;
}