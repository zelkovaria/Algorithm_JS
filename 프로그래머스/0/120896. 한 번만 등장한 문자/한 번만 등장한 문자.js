function solution(s) {
    let answer = [];
    
    for(let i = 0; i<s.length; i++) {
        [...s].filter((char) => char === s[i]).length === 1 && answer.push(s[i]);
    }
    return answer.sort().join('');
}