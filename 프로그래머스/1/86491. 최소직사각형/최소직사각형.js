function solution(sizes) {
    let optWidth = 0;
    let optHeight = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        let [larger, smaller] = sizes[i][0] > sizes[i][1] ? [sizes[i][0], sizes[i][1]] : [sizes[i][1], sizes[i][0]];

        if (larger > optWidth) optWidth = larger;
        if (smaller > optHeight) optHeight = smaller;
    }
    
    return optWidth * optHeight;
}
