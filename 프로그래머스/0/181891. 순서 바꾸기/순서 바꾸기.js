function solution(num_list, n) {
    const afterN = num_list.splice(n);
    
    return [...afterN, ...num_list];
}