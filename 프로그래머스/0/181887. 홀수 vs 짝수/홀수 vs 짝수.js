function solution(num_list) {
    let odd = num_list.filter((value, index) => index % 2 === 0 ).reduce((acc, cur) => acc += cur);
    let even =   num_list.filter((value, index) => index % 2 !== 0 ).reduce((acc, cur) => acc += cur);
    return odd > even ? odd : even;
}