function solution(n) {
    let oddSum = 0;
    let evenSum = 0;
    
    if ( n % 2 !== 0 ) {        
        for ( let i = 1; i<=n; i += 2 ) {
            oddSum += i;
        }
    } else {
        for ( let i = 2; i<=n; i+=2) {
            evenSum += Math.pow(i, 2);
        }
    }
    return n%2 === 0 ? evenSum : oddSum;
}