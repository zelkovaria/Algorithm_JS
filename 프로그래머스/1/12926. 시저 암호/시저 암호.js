function solution(s, n) {
    return s.split('').map(char => {
        if (char === ' ') return ' ';
        const charCode = char.charCodeAt(0);
        let newChar;
        if (char >= 'a' && char <= 'z') {
            newChar = (charCode - 97 + n) % 26 + 97;
        } else if (char >= 'A' && char <= 'Z') {
            newChar = (charCode - 65 + n) % 26 + 65;
        }
        
        return String.fromCharCode(newChar);
    }).join('');
}
