function solution(my_string) {
    const reg = new RegExp("[^0-9]", "g");
    const result = my_string.replace(reg, '');
    return [...result].map(char => Number(char)).sort((a,b) => a-b);
}