function solution(num_list) {
    let even = 0;
    let odd = 0;
    
    for ( let i = 0; i<num_list.length; i++ ) {
        num_list[i] % 2 === 0 ? even++ : odd ++;
    }
    
    return [even, odd];
}