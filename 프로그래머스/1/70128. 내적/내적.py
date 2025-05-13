def solution(a, b):
    nums = []
    for a, b in zip(a,b):
        nums.append(a*b)
        
    return sum(nums)