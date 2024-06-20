function solution(x) {
    let num = [...x.toString()].map(Number);
    let sum = num.reduce((prev, cur) => prev + cur);
    
    return x % sum === 0 ? true : false;
}
