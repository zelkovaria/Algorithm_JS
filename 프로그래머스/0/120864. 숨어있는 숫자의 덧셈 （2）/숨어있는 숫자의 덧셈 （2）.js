function solution(my_string) {
    const regex = new RegExp("[a-zA-Z]","gi");
    const splitedString = my_string.replace(regex, ' ');
    const result = splitedString.split(' ').filter(char => char !== '');
    
    return result.map(num => Number(num)).reduce((acc, cur) => acc + cur, 0);
}