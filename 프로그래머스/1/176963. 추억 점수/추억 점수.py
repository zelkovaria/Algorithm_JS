def solution(name, yearning, photo):
    score_map = {n: y for n, y in zip(name, yearning)}
    answer = []
    
    for group in photo:
        total = 0
        for person in group:
            total += score_map.get(person, 0)
        answer.append(total)
        
    return answer