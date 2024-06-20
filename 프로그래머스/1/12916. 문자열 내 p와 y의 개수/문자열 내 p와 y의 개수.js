function solution(s){
    var answer = true;

    const p = [...s.toUpperCase()].filter(word => word === 'P').length;
    const y = [...s.toUpperCase()].filter(word => word === 'Y').length;
    answer = p === y? true : false;
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}