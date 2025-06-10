import sys
input = sys.stdin.readline

def solution():
  N, M = map(int, input().split())
  waitingTime = [int(input()) for _ in range(N)]
  
  start = 0
  end = max(waitingTime) * M
  result = end
  
  while start <= end:
    mid = (start+end) // 2
    
    total = sum(mid // time for time in waitingTime)
    
    if total >= M:
      result = mid
      end = mid - 1
    else:
      start = mid + 1
      
  print(result)

solution()