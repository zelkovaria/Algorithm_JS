function solution(n) {
    var answer = [...n.toString()].map(Number);
    return parseInt(answer.sort().reverse().join(''));
    
}