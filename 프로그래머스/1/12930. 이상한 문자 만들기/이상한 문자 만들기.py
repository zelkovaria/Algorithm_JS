def solution(s):
    result = []
    
    for word in s.split(' '):
        transformed = ''
        for i, ch in enumerate(word):
            if i % 2 == 0:
                transformed += ch.upper()
            else:
                transformed += ch.lower()
        result.append(transformed)
    return ' '.join(result)