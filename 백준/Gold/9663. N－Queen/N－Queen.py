import sys
input = sys.stdin.readline

def solution():
  n = int(input())

  answer = search(n, 0, [False] * n, [False] * ( n * 2), [False] * ( n * 2))

  return answer

def search(n, y, width, diagonal1, diagonal2):
  count = 0

  if n == y:
    return 1
  
  for i in range(n):
    if width[i] or diagonal1[i+y] or diagonal2[i-y+n]:
      continue
    
    width[i] = diagonal1[i+y] = diagonal2[i-y+n] = True
    count += search(n, y+1, width, diagonal1, diagonal2)
    width[i] = diagonal1[i+y] = diagonal2[i-y+n] = False

  return count
  
print(solution())