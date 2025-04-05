function solution(nums) {
    const set = new Set(nums);
    const maxLength = nums.length / 2;
    
    return set.size > maxLength ? maxLength : set.size;
}