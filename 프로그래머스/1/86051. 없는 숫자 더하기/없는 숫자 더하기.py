def solution(numbers):
    nums = []
    
    for i in range(10):
        if i not in numbers:
            nums.append(i)
            
            
    return sum(nums)