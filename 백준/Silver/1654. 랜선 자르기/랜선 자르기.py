import sys
input = sys.stdin.readline

def solution():
  K, N = map(int, input().split())
  lines = [int(input()) for _ in range(K)]
  
  start = 1
  end = max(lines)
  result = 0
  
  while start <= end:
    mid = (start + end) // 2
    total = sum(line // mid for line in lines)
    
    if total >= N:
      result = mid
      start = mid + 1
    else:
      end = mid - 1
  print(result)

solution()