function solution(n, words) {
    const prevWords = [];
    
    let i = 1;
    let looserIndex = 0;
    
    if (2 <= words[0].length && words[0].length <= 50) {
        prevWords.push(words[0]);
    } else {
        return [-1, -1];
    }
    
    while (i < words.length) {
        const lastChar = words[i-1].length - 1;
        
        if (2 > words[i].length || words[i].length > 50) return [-1, -1];
        
        if (words[i].length)
        
        if (words[i-1][lastChar] !== words[i][0]) {
            looserIndex = i;
            return findLooser(i, n);
        }
        if (prevWords.includes(words[i])) {
            looserIndex = i;
            return findLooser(i, n);
        }
        
        prevWords.push(words[i]);
        
        i++;
    }
    
    if (!looserIndex) {
        return [0, 0];
    }

    
}

function findLooser(looserIndex, n) {
    const userId = (looserIndex+1) % n === 0 ? n : (looserIndex+1) % n;

    return [userId, Math.ceil((looserIndex+1)/n)];
}