def solution(d, budget):
    d.sort()
    count = 0
    
    for i in range(len(d)):
        if budget >= d[i]:
            budget -= d[i]
            count += 1
        
    return count