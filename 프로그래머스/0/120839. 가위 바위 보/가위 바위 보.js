function solution(rsp) {
    const replacements = { '2': '0', '0': '5', "5": "2" };
    let result = '';

    for (const char of rsp) {
        result += replacements[char] || char;
    }
    
    return result;
}