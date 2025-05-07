function solution(n, lost, reserve) {
    const students = Array(n).fill(1);
    const sortedLost = lost.sort((a, b) => a - b);
    const sortedReserve = reserve.sort((a, b) => a - b);
    
    // 겹치는 학생 제거
    const realLost = sortedLost.filter(l => !sortedReserve.includes(l));
    const realReserve = sortedReserve.filter(r => !sortedLost.includes(r));
    
    for (let i = 0; i < realLost.length; i++) {
        students[[realLost[i] - 1]] = 0;
    }
    
    for (let i = 0; i < realReserve.length; i++) {
        students[[realReserve[i] - 1]] += 1;
    }
    
    for (let i = 0; i < realLost.length; i++) {
        const lostStudent = realLost[i] - 1;
        if(lostStudent > 0 && students[lostStudent - 1] === 2) {
            students[lostStudent- 1] -= 1;
            students[lostStudent] += 1;
        } else if (lostStudent < n - 1 && students[lostStudent + 1] === 2) {
            students[lostStudent + 1] -= 1;
            students[lostStudent] += 1;
        }
    }
    
    return students.filter((student) => student >= 1).length;
}