function solution(str1, str2) {
    let answer = [];
    let a = 0;
    let b = 0;
    
    for (let i = 0; i<str1.length+str2.length; i++) {
        
        
        if ( i%2 ==0 ) {
            answer.push(str1[a]);
            a++;
        } else {
            answer.push(str2[b]);
            b++;
        }
    }
    
    return answer.join('');
}