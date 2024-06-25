function solution(num, k) {
    let numArray = [...num.toString()];
    return numArray.includes(k.toString()) ? numArray.indexOf(k.toString())+1 : -1;
}