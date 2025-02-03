// 1. 작업별로 소요 기간을 구한다
// 2. 구한 기간을 큐에 모두 push한다
// 3. 앞선 값이 나중 값보다 적으면 1을 return에 추가한다
// 4. 앞선 값이 나중 값보다 크면 더 큰 값을 만나기 전까지 값을 증가시킨 후, 
//    만나기 직전 값을 return에 푸시한다

function solution(progresses, speeds) {
    let requiredDays = [];
    let answer = [];
    
    progresses.map((progress, i) => {
        requiredDays.push(Math.ceil((100 - progresses[i])/speeds[i]));
    })
    
    
    let i = 0;
    
    while (i < requiredDays.length) {
        const current = requiredDays[i];
        let count = 1;
        
        while (i + 1 < requiredDays.length && requiredDays[i + 1] <= current) {
            count++;
            i++;
        }
        
        answer.push(count);
        i++;
        
    }
    
    return answer;
}