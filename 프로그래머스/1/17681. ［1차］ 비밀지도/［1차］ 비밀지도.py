def solution(n, arr1, arr2):
    answer = []
    for i in range(n):
        binary = bin(arr1[i] | arr2[i])[2:].zfill(n)
        row = binary.replace('1', '#').replace('0', ' ')
        answer.append(row)
    return answer
        