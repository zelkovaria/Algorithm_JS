import sys
input = sys.stdin.readline

def solution():
  M, N = map(int, input().split())
  answer = []
  
  for i in range(M, N+1):
    if i < 2:
      continue
    is_prime = True
    for j in range(2, int(i ** 0.5) + 1):
      if i % j == 0:
        is_prime = False
        break
    if is_prime:
      print(i)

solution()