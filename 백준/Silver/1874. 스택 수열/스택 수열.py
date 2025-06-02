import sys
input = sys.stdin.readline

def solution():
  N = int(input())
  nums = [int(input()) for _ in range(N)]
  
  stack = []
  answer = []
  current = 1
  
  for num in nums:
    while current <= num:
      stack.append(current)
      answer.append('+')
      current += 1
      
    if stack[-1] == num:
      stack.pop()
      answer.append('-')
    else:
      print('NO')
      return
  
  print('\n'.join(answer))
    

solution()