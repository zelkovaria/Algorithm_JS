function solution(strArr) {
    return strArr.map((value, index) => index % 2 === 0 ? value.toLowerCase() : value.toUpperCase());
}