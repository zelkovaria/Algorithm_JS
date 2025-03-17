function solution(id_list, report, k) {
    const answer = [];
    const userInfo = {}; // 유저별 신고 내역
    const reportedInfo = {}; // 유저별 신고된 정보
    const stoppedUsers = []; // 정지된 유저들
    
    // userInfo 정리
    for (let i = 0; i < report.length; i++ ) {
        const user = report[i].split(' ')[0];
        const target = report[i].split(' ')[1];
        
        if (!userInfo[user]) userInfo[user] = [];
        if (!userInfo[user].includes(target)) userInfo[user].push(target);
    }
    
    // 신고된 유저들 정보 정리
    const userInfoValues = Object.values(userInfo).flat();
    for (let i = 0; i < userInfoValues.length; i++) {
        reportedInfo[userInfoValues[i]] = (reportedInfo[userInfoValues[i]] || 0) + 1;
    }
    
    for(const [key, value] of Object.entries(reportedInfo)) {
        if (value >= k) stoppedUsers.push(key);
    }
    
    for(const user of id_list) {
        const reports = userInfo[user] || [];
        
        const num = reports.filter(user => stoppedUsers.includes(user)).length;
        answer.push(num); 
    }
    
    return answer;
}