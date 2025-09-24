import sys
import heapq

def main():
    input = sys.stdin.readline
    n = int(input())
    heap = []
    out = []

    for _ in range(n):
        x = int(input())
        if x == 0:
            # 힙이 비었으면 0, 아니면 최솟값 pop
            out.append(str(heapq.heappop(heap) if heap else 0))
        else:
            heapq.heappush(heap, x)

    sys.stdout.write("\n".join(out))

if __name__ == "__main__":
    main()