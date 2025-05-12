def solution(s):
    upper_s = s.upper()
    p_count = upper_s.count('P')
    s_count = upper_s.count('Y')
    
    return True if p_count == s_count else False