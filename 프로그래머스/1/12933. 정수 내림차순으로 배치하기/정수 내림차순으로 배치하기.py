def solution(n):
    nums = [x for x in str(n)]
    sorted_nums = sorted(nums, reverse = True)
    
    return int(''.join(sorted_nums))