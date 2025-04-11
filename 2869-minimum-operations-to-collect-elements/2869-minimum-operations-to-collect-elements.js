/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let answer = 0;
    const set = new Set();
    
    while (nums.length > 0 && !hasAll(set, k)) {
        const last = nums.pop();
        answer++;
        set.add(last);
    }

     return hasAll(set, k) ? answer : -1;
};

function hasAll(set, k) {
    for (let i = 1; i <= k; i++) {
        if (!set.has(i)) return false;
    }
    return true;
}