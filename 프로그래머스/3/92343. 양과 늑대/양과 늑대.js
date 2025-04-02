class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    push(item) {
        this.items.push(item);
        this.rear++;
    }
    
    pop() {
        return this.items[this.front++];
    }
    
    isEmpty() {
        return this.front === this.rear;
    }
}

function solution(info, edges) {
    const tree = generateTree(info, edges);
    let maxSheep = 0;
    
    const q = new Queue();
    q.push([0, 1, 0, new Set()]);
    
    while (!q.isEmpty()) {
        const [current, sheepCount, wolfCount, visited ] = q.pop();
        maxSheep = Math.max(maxSheep, sheepCount);
        
        if (tree[current]) {
            for (const next of tree[current]) visited.add(next);
        }
        
        for (const next of visited) {
            if (info[next]) {
                if (sheepCount !== wolfCount + 1) {
                    const newVisited = new Set(visited);
                    newVisited.delete(next);
                    q.push([next, sheepCount, wolfCount + 1, newVisited]);
                }
            } else {
                const newVisited = new Set(visited);
                newVisited.delete(next);
                q.push([next, sheepCount + 1, wolfCount, newVisited]);
            }
        }
    }
    
    return maxSheep;
}

function generateTree(info, edges) {
    const nodeInfo = {}
    
    for (let i = 0; i < edges.length; i++) {
        const [parent, child] = edges[i];
        
        if(!nodeInfo[parent]) nodeInfo[parent] = [];
        
        nodeInfo[parent].push(child);
    }
    
    return nodeInfo;
}