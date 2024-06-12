function solution(d, budget) {
    d.sort((a,b) => a-b);
    
    let count = 0;
    for ( let request of d) {
        if (budget < request) break;
        
        budget -= request;
        count++;
    }
    
    return count;
}