function solution(n) {
    var answer = 0;
    var result = [];
    
    if (n===0) return 0;
    
    for ( let i=1; i<=n; i++) {
        if (n%i === 0) {
            result.push(i);
        }
    }
    
    return result.reduce((prev,current) => prev+current);
    
}