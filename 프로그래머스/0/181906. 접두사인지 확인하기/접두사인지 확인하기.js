function solution(my_string, is_prefix) {
    let prefix = my_string.slice(0, is_prefix.length);
    return prefix === is_prefix ? 1 : 0;
}