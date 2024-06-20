function solution(x, n) {
    let answer = [x];
    
    for (let i =0; i<n-1; i++) {
        answer = [...answer, answer[i]+x];
    }
    
    return answer;
}