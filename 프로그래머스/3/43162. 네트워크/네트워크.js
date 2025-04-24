function solution(n, computers) {
    const visited = Array.from(n).fill(false);
    let networdCount = 0;
    
    function bfs(start) {
        const queue = [start];
        visited[start] = true;
        
        while (queue.length > 0) {
            const current = queue.shift();
            for (let i = 0; i < n; i++) {
                if (computers[current][i] === 1 && !visited[i]) {
                  queue.push(i);
                  visited[i] = true;
                }
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if(!visited[i]) {
            bfs(i);
            networdCount++;
        }
    }
    
    return networdCount;
}