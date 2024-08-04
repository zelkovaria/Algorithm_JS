function solution(n, control) {
    const controlArr = control.split('');
    let wCount = controlArr.filter(char => char === 'w').length;
    let sCount = controlArr.filter(char => char === 's').length;
    let dCount = controlArr.filter(char => char === 'd').length;
    let aCount = controlArr.filter(char => char === 'a').length;
    
    return n+wCount-sCount+dCount*10-aCount*10;
    
}