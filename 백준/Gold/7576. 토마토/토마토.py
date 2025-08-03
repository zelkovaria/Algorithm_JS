from collections import deque
import sys

def solution():
    M, N = map(int, sys.stdin.readline().split())
    maps = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

    moves = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    q = deque()

    for i in range(N):
        for j in range(M):
            if maps[i][j] == 1:
                q.append((i, j))

    while q:
        x, y = q.popleft()
        for dx, dy in moves:
            nx, ny = x + dx, y + dy

            if 0 <= nx < N and 0 <= ny < M and maps[nx][ny] == 0:
                maps[nx][ny] = maps[x][y] + 1
                q.append((nx, ny))

    result = 0
    for i in range(N):
        for j in range(M):
            if maps[i][j] == 0:
                print(-1)
                return
            result = max(result, maps[i][j])

    print(result - 1)

solution()