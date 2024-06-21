function solution(my_string) {
    return my_string.split(" ").filter(char => char !== '');
}