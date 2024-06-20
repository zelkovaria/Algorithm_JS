function solution(n, m) {
    var answer = [];
    
    for ( let i = 1 ; i<Math.max(n,m); i++ ) {
        if ( n % i === 0 && m % i === 0 ) answer.push(i);
    }
    
    let LCM = answer.length !== 1 ? Math.max(...answer) * (n/Math.max(...answer)) * (m/Math.max(...answer)) : n*m;
    
    return [Math.max(...answer), LCM];
}