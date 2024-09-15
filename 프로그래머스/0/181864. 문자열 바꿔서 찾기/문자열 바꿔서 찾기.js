function solution(myString, pat) {
    let answer = myString.split('').map(char => {
        return char === 'A' ? 'B' : 'A';
    }).join('');
    
     return answer.includes(pat) ? 1 : 0;
}