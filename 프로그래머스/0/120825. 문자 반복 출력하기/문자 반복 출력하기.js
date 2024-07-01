function solution(my_string, n) {
    let arr = new Array(my_string.length*3);
    [...my_string].map((char, index) => {
        arr.push(char.repeat(n));
    })
    return arr.join('');
}