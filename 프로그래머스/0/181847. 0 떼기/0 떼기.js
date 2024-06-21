function solution(n_str) {
    const startIndex = [...n_str].findIndex(char => char !== '0');
    return [...n_str].slice(startIndex).join('');
}