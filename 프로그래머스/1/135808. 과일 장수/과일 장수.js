function solution(k, m, score) {
    let sortedScore = score.sort((a,b) => b-a);
    let box = [];
    let answer = 0;
    
    for ( let i = 0; i<=sortedScore.length-m ; i+= m ) {
        box.push(sortedScore.slice(i, i+m));
    }
    
    return answer = box.map(num => num[num.length-1]*m).reduce((acc, cur) => acc += cur, 0);
}