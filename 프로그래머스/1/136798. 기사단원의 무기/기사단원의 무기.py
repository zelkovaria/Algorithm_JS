def solution(number, limit, power):
    total_iron = 0

    for i in range(1, number + 1):
        count = 0
        for j in range(1, int(i ** 0.5) + 1):
            if i % j == 0:
                if j * j == i:
                    count += 1 
                else:
                    count += 2

        if count > limit:
            total_iron += power
        else:
            total_iron += count

    return total_iron