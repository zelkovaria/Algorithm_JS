function solution(myString) {
    let count = 0;
    let answer = [];
    
    for ( let i =0; i<myString.length; i++ ) {
        if (myString[i] === 'x') {
            answer.push(count);
            count = 0;
        }
        else {
            count++;
        }
    }
    answer.push(count);
    
    return answer;
}