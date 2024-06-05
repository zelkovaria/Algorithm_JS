function solution(name, yearning, photo) {
    let namesValue = matchScores(name, yearning);
    return findPhoto(namesValue, photo);
}

function matchScores(name, yearning) {
    let namesValue = name.map((name, index) => 
        yearning[index] !== undefined ? [name, yearning[index]] : [name, 0]);
    
    return namesValue;
}

function findPhoto(namesValue, photo) {
    let photoScore = [];
    
    for (let i = 0; i < photo.length; i++) {
        let sumScore = 0; 
        for (let j = 0; j < photo[i].length; j++) {
            const nameIndex = namesValue.findIndex(pair => pair[0] === photo[i][j]);
            if (nameIndex !== -1) {
                sumScore += namesValue[nameIndex][1];
            }
        }
        photoScore.push(sumScore);
    }
    
    return photoScore;
}