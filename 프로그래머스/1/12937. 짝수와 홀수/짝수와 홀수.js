function solution(num) {
    if (num === 0) return "Even";
    
    return num%2 === 0 ? "Even" : "Odd";
}