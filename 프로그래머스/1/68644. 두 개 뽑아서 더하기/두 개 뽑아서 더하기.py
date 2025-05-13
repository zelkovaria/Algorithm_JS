from itertools import combinations

def solution(numbers):
    combs = []
    
    for comb in combinations(numbers, 2):
        combs.append(comb)
    
    sums = [sum(comb) for comb in combs]
    unique_sums = list(set(sums))
    
    return sorted(unique_sums)