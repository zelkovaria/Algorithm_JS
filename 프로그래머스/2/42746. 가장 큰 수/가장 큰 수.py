from functools import cmp_to_key

def compare(a, b):
    if a + b > b + a:
        return -1
    elif a + b < b + a:
        return 1
    else:
        return 0

def solution(numbers):
    numbers = list(map(str, numbers))
    numbers.sort(key=cmp_to_key(compare))
    
    if numbers[0] == '0':
        return '0'
    return ''.join(numbers)