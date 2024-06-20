function solution(n) {
    let str = [];
    for (let i=1; i<=n; i++) {
        i %2 !== 0 ? str.push("수") : str.push("박");
    }
    return str.join("");
}