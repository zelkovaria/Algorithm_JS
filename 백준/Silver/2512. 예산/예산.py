import sys
input = sys.stdin.readline

def solution():
  regions = int(input())
  requiredBudget = list(map(int, input().split()))
  totalBudget = int(input())
  
  start = 0
  end = max(requiredBudget)
  result = 0
  
  while start <= end:
    mid = (start + end) // 2
    total = 0
    
    for i in requiredBudget:
      if i > mid:
        total += mid
      else:
        total += i
    
    if total <= totalBudget:
      result = mid
      start = mid + 1
    else:
      end = mid - 1
      
  print(result)

solution()