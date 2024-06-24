function solution(array, n) {
    let minSub = Infinity;
    let answer = null;
    const map = new Map(array.map((num, idnex) => [num, Math.abs(num-n)]));
    
    for ( let [key, value] of map) {
        if ( value < minSub || (value === minSub && key < answer)) {
            answer = key;
            minSub = value;
        } 
    }
    return answer;
}