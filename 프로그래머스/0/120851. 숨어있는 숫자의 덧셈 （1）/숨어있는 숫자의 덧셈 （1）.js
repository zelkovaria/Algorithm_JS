function solution(my_string) {
    my_string = my_string.replace(/\D/g, '');
    let arr = my_string.split('');
    
    return arr.map(num => Number(num)).reduce((acc, cur) => acc+cur);
}