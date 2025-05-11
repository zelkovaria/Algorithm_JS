def solution(n):
    if n == 0:
        return 0
    
    nums = []
    for i in range(1, n+1):
        if n % i == 0:
            nums.append(i)
            
    return sum(nums)