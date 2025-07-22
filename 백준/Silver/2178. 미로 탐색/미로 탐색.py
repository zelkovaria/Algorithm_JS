
from collections import deque
import sys
input = sys.stdin.readline

def solution():
  N, M = map(int, input().split())
  maps = [list(map(int, input().strip())) for _ in range(N)]
  
  moves = [[-1, 0], [1, 0], [0, -1], [0,1]]
  dist = [[-1]*M for _ in range(N)]
  
  def bfs(start):
    q = deque()
    
    q.append(start)
    dist[start[0]][start[1]] = 1;
    
    while q:
      x, y = q.popleft()
      
      for dx, dy in moves:
        nx = x + dx
        ny = y + dy
        
        if nx < 0 or nx >= N or ny < 0 or ny >= M:
          continue
        
        if maps[nx][ny] == 0:
          continue;
        
        if dist[nx][ny] == -1:
          q.append((nx, ny))
          dist[nx][ny] = dist[x][y] + 1
      
  bfs((0, 0))    
  print(dist[N-1][M-1])
      

solution()