function solution(prices) {
    const stack = [];
    const answer = new Array(prices.length).fill(0);
    
    for (let i = 0; i < prices.length; i++) {
      while(stack.length > 0 && prices[i] < prices[stack[stack.length-1]]) {
        let topIndex = stack.pop();
        answer[topIndex] = i - topIndex;
      }
        
        stack.push(i);
    }
    
    while(stack.length > 0 ) {
        let topIndex = stack.pop();
        answer[topIndex] = prices.length - 1 - topIndex;
    }
    
    return answer;
}