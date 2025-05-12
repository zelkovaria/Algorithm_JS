def solution(a, b):
    nums = [x for x in range(min(a,b), max(a,b)+1)]
    
    return sum(nums)