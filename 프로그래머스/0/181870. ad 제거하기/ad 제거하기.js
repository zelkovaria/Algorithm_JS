function solution(strArr) {
    let answer = [];
    strArr.map(word => !word.includes("ad") && answer.push(word));
    return answer;
}