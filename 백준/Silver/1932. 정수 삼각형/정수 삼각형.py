import sys
input = sys.stdin.readline

def solution():
  n = int(input())
  trees = [list(map(int, input().split())) for _ in range(n)]
  
  for i in range(n-2, -1, -1):
    for j in range(0, len(trees[i]), 1):
      trees[i][j] += max(trees[i+1][j], trees[i+1][j+1])

  return trees[0][0]
  
print(solution())