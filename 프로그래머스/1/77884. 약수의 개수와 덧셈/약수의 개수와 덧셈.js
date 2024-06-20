function solution(left, right) {
    let numbers = Array.from({ length: right - left + 1 }, (_, i) => left + i);
    let result = numbers.reduce((acc, num) => {
        let divisorCount = countDivisors(num);
        return divisorCount % 2 === 0 ? acc + num : acc - num;
    }, 0);
    return result;
}

function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) count++;
    }
    return count;
}

