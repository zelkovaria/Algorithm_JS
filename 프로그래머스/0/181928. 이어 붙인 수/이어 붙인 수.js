function solution(num_list) {
    let odd = [];
    let even = [];
    
    num_list.filter((num) => num % 2 === 0 ? even.push(num) : odd.push(num));
    return +odd.join('') + +even.join('');
}