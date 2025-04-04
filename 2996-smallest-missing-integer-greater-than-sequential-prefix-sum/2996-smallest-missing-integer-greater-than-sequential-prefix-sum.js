/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let sum = 0;

    sum += nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1] + 1) {
            sum += nums[i];
        } else {
            break;
        }
    }

    const numSet = new Set(nums);

    while (numSet.has(sum)) {
        sum++;
    }

    return sum;
};