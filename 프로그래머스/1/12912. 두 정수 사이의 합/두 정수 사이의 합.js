function solution(a, b) {
    var answer = [] ;
    if ( a > b ) {
        answer = Array(a-b+1).fill(b-1).map((val, i) => val+(i+1));
    }
    else {
        answer = Array(b-a+1).fill(a-1).map((val, i) => val+(i+1));
    };  
    return answer.reduce((prev, cur) => prev+cur);
}