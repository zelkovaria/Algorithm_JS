def solution(x):
    digit_num = [int(x) for x in list(str(x))]
    digit_sum = sum(digit_num)
    
    return True if x % digit_sum == 0 else False