function solution(chicken) {
    let answer = 0;
    
    while (chicken >= 10) {
        let canOrderNum = Math.floor(chicken / 10);
        answer += canOrderNum
        
        chicken = ( chicken % 10 ) + canOrderNum;
    }
    
    return answer;
    
}