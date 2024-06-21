function solution(num_list) {
    return num_list.slice(-1) > num_list.slice(-2, -1) ? [...num_list, num_list.slice(-1)-num_list.slice(-2, -1)] : [...num_list, num_list.slice(-1)*2];
}