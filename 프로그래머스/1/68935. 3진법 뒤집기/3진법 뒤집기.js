function solution(n) {
    let ternary = n.toString(3);
    let reverse = ternary.split('').reverse().join('');
    return parseInt(reverse, 3);
}