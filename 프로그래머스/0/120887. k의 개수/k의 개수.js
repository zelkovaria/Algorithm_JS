function solution(i, j, k) {
    let arr = Array.from(Array(j-i+1), (_, index) => i+index );
    let count = 0;
    let result = [];
    for (let i = 0; i<arr.length; i++) {
        if([...arr[i].toString()].includes(k.toString())) {
            result.push([...arr[i].toString()].filter(char => char === k.toString()).length);
        }
    }
    return result.length !== 0 ? result.reduce((acc, cur) => acc + cur) : 0;
}