function solution(arr, delete_list) {
    let answer = [];
    arr.forEach(value => delete_list.includes(value) ? null : answer.push(value));
    return answer;
}