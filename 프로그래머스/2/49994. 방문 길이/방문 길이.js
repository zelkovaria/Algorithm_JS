function solution(dirs) {
    const paths = new Set();
    let x = 0, y = 0;
    
    const moving = {
        'U': [0, 1],
        'D': [0, -1],
        'R': [1, 0],
        'L': [-1, 0]
    };
    
    for (const dir of dirs) {
        const [dx, dy] = moving[dir];
        const nx = x + dx;
        const ny = y + dy;
        
        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        
        const path = `${x},${y},${nx},${ny}`;
        const reversePath = `${nx},${ny},${x},${y}`;
        
        paths.add(path);
        paths.add(reversePath);
        
        x = nx;
        y = ny;
    }
    
    return paths.size / 2;
}