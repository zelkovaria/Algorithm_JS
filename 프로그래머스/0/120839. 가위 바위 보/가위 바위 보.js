function solution(rsp) {
    const replacements = { '2': '0', '0': '5', "5": "2" };
    
    return [...rsp].map(char => replacements[char] || char).join('');
}