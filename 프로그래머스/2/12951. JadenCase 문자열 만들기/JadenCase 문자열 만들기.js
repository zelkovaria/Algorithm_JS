function solution(s) {
    return s.split(' ').map(i => i.split('').map((j, key) => key === 0 ? j.toUpperCase() : j.toLowerCase()).join('')).join(' ');
}