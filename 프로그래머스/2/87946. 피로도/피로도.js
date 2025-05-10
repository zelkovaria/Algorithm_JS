function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(false);
    let count = 0;
    let nowK = k;
    
    let maxCount = 0;
    function findDungeons(count, nowK, visited) {        
        
        maxCount = Math.max(count, maxCount);
        
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && nowK >= dungeons[i][0]) {
                let nextNowK = nowK -  dungeons[i][1];
                visited[i] = true;
                findDungeons(count + 1, nextNowK, visited);
                visited[i] = false;
            }
        }
    }
    
    findDungeons(count, k, visited);
    
    return maxCount;
}