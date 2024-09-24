function solution(N, stages) {
    let failureRates = [];
    
    for (let i = 1; i <= N; i++) {
        const reached = stages.filter(stage => stage >= i).length;
         const notCleared = stages.filter(stage => stage === i).length;
        const failureRate = reached === 0 ? 0 : notCleared / reached;
        failureRates.push({ stage: i, failureRate });
    }
    
    failureRates.sort((a, b) => {
  if (b.failureRate === a.failureRate) {
    return a.stage - b.stage; 
  } else {
    return b.failureRate - a.failureRate;  
  }
});
    return failureRates.map(item => item.stage);
}