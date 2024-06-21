function solution(a, b) {
    const isOddA = a % 2 !== 0;
    const isOddB = b % 2 !== 0;
    
    if ( isOddA && isOddB ) {
        return a**2 + b**2;
    } else if ( isOddA || isOddB ) {
        return 2*(a+b);
    } else {
        return Math.abs(a-b);
    };
}