function solution(a, b, n) {
    return cola(n,a, b);
}

function cola(n, a, b) {
    if (n<a) return 0;
    const newCoke = Math.floor(n/a)*b;
    const myCoke = n - Math.floor(n / a) * a + newCoke;
    
    return newCoke + cola(myCoke, a, b);
}