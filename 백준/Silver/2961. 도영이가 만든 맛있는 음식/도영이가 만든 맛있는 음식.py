import sys
input = sys.stdin.readline

def solution() :
  test_count = int(input())
  taste = [list(map(int, input().split())) for _ in range(test_count)]
  
  min_diff = float('inf')
  
  def get_diff (index, sour, bitter, count):
    nonlocal min_diff
    if index == test_count:
      if count > 0:
        min_diff = min(min_diff, abs(sour - bitter))
      return
      
    get_diff(index + 1, sour * taste[index][0], bitter + taste[index][1], count + 1)
    
    get_diff(index + 1, sour, bitter, count)
      
  get_diff(0,1,0,0)
    
  print(min_diff)
  
solution()