function solution(name, yearning, photo) {
    const yearningByName = {}
    const answer = []
    
    for (let i = 0; i < name.length; i++) {
        yearningByName[name[i]] = yearning[i]
    }
    
    for (let i = 0; i < photo.length; i++) {
        let sum = 0;
        for (let j = 0; j < photo[i].length; j++) {
            if (yearningByName[photo[i][j]]) {
                sum += yearningByName[photo[i][j]];
            } else {
                sum += 0;
            }
        }
        answer.push(sum);
    }
    
    return answer;
}