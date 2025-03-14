function solution(record) {
    const tempArr = [];
    const answer = [];
    const userInfo = {};
    
    for (let i = 0; i < record.length; i++) {
        tempArr[i] = record[i].split(' ');
    }
    
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i][0] === 'Enter') {
            userInfo[tempArr[i][1]] = tempArr[i][2];
        } else if (tempArr[i][0] === 'Change') {
            userInfo[tempArr[i][1]] = record[i].split(' ')[2];
        }
    }    
    
    for (let i = 0; i < record.length; i++) {
        if (tempArr[i][0] === 'Enter') {
            answer.push(`${userInfo[tempArr[i][1]]}님이 들어왔습니다.`)
        } else if (tempArr[i][0] === 'Leave') {
            answer.push(`${userInfo[tempArr[i][1]]}님이 나갔습니다.`)
        } 
    }
    return answer;
}