def solution(t, p):
    p_len = len(p)
    p_num = int(p)
    count = 0
    
    for i in range(len(t) - p_len + 1):
        if int(t[i:i+p_len]) <= p_num:
            count += 1
    
    return count