function solution(want, number, discount) {
    const desirousProducts = {}
    const sailPeriod = 10;
    let answer = 0;
    
    for (let i = 0; i < want.length; i++) {
        desirousProducts[want[i]] = number[i];
    }
    
    const isValid = (freq) => {
        for (let product in desirousProducts) {
            if ((freq[product] || 0) < desirousProducts[product]) return false;
        }
        
        return true;
    };
    
    const freq = {};
    for (let i = 0; i < sailPeriod; i++) {
        freq[discount[i]] = (freq[discount[i]] || 0) + 1;
    }
    
    if (isValid(freq)) answer++;
    
    for ( let i = 1; i <= discount.length - sailPeriod; i++) {
        const left = discount[i-1];
        freq[left]--;
        
        const right = discount[i + sailPeriod - 1];
        freq[right] = (freq[right] || 0) + 1;
        
        if (isValid(freq)) answer++;
    }
    
    return answer;
}
