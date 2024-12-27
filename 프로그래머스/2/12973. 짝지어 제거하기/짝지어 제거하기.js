function solution(s)
{
    let stack = [];
    
    let splited = s.split("");
    
    for (let i = 0; i<splited.length; i++) {
        if (stack[stack.length-1] === splited[i]) {
            stack.pop();
            
            continue;
        }
        
        stack.push(splited[i]);
    }
    return stack.length === 0 ? 1 : 0;
}