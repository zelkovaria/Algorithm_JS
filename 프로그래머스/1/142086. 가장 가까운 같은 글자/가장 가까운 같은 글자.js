// 풀이1) 배열

function solution(s) {
    let sArr = [...s];
    let answer = [];
    
    for (let i = 0; i < sArr.length; i++) {
        if (i === 0) {
            answer.push(-1);
            continue;
        }
        
        let lastIndex = sArr.lastIndexOf(sArr[i], i-1);
        
        if (lastIndex === -1) {
            answer.push(-1);
        } else {
            answer.push(i - lastIndex);
        }
    }
    
    return answer;
}

// 풀이2) 스택