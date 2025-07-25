
from collections import deque
import sys
input = sys.stdin.readline

def solution():
  N = int(input())
  maps = [list(map(int, input().strip())) for _ in range(N)]
  visited = [[False] * N for _ in range(N)]
  moves=[[-1, 0], [1, 0], [0, -1], [0, 1]]
  count_list = []
  
  def bfs(start):
    q = deque()
    q.append(start)
    visited[start[0]][start[1]] = True
    count = 1
    
    while q:
      x, y = q.popleft()
      
      for dx, dy in moves:
        nx, ny = x+dx, y+dy
        
        if nx < 0 or nx >= N or ny < 0 or ny >= N:
          continue
        if visited[nx][ny] or maps[nx][ny] == 0:
          continue
        
        visited[nx][ny] = True
        q.append([nx, ny])
        count += 1
        
    return count
  
  for i in range(N):
    for j in range(N):
      if not visited[i][j] and maps[i][j] == 1:
        count_list.append(bfs([i, j]))
        
  print(len(count_list))
  for c in sorted(count_list):
    print(c)
      

solution()