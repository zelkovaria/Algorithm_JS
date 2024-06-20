function solution(s) {        
    if ([...s].length === 4 || [...s].length === 6) {
        let result = s.replace(/[0-9]/g, '');
    
        return [...result].length === 0 ? true : false;
    }
    return false;
}

console.log(solution('abcd'));
console.log(solution('A123'));
console.log(solution('ab12'));
console.log(solution('abc1'));
console.log(solution('1234'));