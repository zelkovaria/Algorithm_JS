function solution(start_num, end_num) {
    let answer = Array(end_num-start_num+1).fill().map((_, index) => start_num + index);
    return answer;
}