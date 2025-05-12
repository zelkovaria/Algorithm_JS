def solution(num):
    count = 0
    
    while count <= 500 and num != 1:
        num = num //2 if num % 2 == 0 else num * 3 + 1
        count += 1
    
    return count if count <= 500 else -1