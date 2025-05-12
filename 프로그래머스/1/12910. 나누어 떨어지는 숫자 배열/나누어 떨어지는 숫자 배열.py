def solution(arr, divisor):
    nums = [x for x in arr if x % divisor == 0]
    sorted_nums = sorted(nums)
    
    return sorted_nums if len(sorted_nums) > 0 else [-1]
    