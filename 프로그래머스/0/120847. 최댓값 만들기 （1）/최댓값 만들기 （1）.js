function solution(numbers) {
    let sorted = numbers.sort((a,b) => a-b);
    
    return sorted[sorted.length-1] * sorted[sorted.length-2];
}