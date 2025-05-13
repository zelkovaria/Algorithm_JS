from itertools import combinations

def solution(number):
    combs = [];
    count = 0
    for comb in combinations(number, 3):
        combs.append(comb)
    
    
    for i in range(len(combs)):
        if sum(combs[i]) == 0:
            count += 1
    return count