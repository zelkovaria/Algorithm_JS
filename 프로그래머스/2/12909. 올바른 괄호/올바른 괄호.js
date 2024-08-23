function solution(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (char === '(') {
            stack.push(char); 
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop(); 
        }
    }
    
    return stack.length === 0;
}