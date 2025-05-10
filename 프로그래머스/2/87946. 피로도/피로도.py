def solution(k, dungeons):
    max_count = 0
    visited = [False] * len(dungeons)
    
    def find_dungeons (count, nowK, visited):
        nonlocal max_count
        max_count = max(count, max_count)
        
        for i in range(len(dungeons)):
            if not visited[i] and dungeons[i][0] <= nowK:
                next_nowK = nowK - dungeons[i][1]
                visited[i] = True
                find_dungeons (count + 1, next_nowK, visited)
                visited[i] = False
        
    find_dungeons(0, k, visited)
    
    return max_count