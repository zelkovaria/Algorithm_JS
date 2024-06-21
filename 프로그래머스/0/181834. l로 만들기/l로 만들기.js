function solution(myString) {
    const reg = /[a-k]/g;
    
    return myString.replace(reg, 'l');
}