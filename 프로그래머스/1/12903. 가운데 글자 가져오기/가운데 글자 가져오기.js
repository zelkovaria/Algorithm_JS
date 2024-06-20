function solution(s) {
    let arr = [...s];
    return arr.length % 2 === 0 ? arr.slice(arr.length/2-1, arr.length/2+1).join("") : 
    arr[Math.floor(arr.length/2)];
}