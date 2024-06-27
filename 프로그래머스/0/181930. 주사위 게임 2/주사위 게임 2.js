function solution(a, b, c) {
    const answer = [...new Set([a,b,c])];
    if (answer.length === 3) {
        return a+b+c;
    } else if (answer.length === 2) {
        return (a+b+c)*(a**2+b**2+c**2);
    } else {
        return (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3);
    }
}