def solution(left, right):
    nums = []
    
    for i in range(left, right+1):
        if countDivision(i) % 2 == 0:
            nums.append(i)
        else:
            nums.append(-i)
    return sum(nums)

def countDivision(num):
    count = 0
    for i in range(1, num+1):
        if num % i == 0:
            count += 1
    return count