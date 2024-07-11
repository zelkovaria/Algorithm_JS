function solution(str_list, ex) {
    let result = [];
    str_list.map(char => !char.includes(ex) && result.push(char));
    return result.join('');
}