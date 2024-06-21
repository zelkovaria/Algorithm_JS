function solution(my_string, index_list) {
    let answer = [];
    
    for ( const index in index_list) {
        answer.push([...my_string][index_list[index]]);
    }
    return answer.join('');
}