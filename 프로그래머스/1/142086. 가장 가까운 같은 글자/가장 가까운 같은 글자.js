// 풀이1) 배열
// 풀이2) Map
function solution(s) {
    let lastSeen = new Map();
    let answer = [];
    
    for (let i = 0; i < s.length; i++) {
        if(!lastSeen.has(s[i])) {
            answer.push(-1);
        } else {
            answer.push(i - lastSeen.get(s[i]));
        }
        lastSeen.set(s[i], i);
    }
    
    return answer;
}