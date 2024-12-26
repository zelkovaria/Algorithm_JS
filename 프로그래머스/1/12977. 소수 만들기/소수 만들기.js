function solution(nums) {
    function isPrime(num) {
        if (num < 2) return false;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    let count = 0;
    const len = nums.length;
    
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                
                if (isPrime(sum)) {
                    count++;
                }
            }
        }
    }
    
    return count;
}