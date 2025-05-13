def solution(price, money, count):
    prices = []
    
    for i in range(1, count+1):
        prices.append(i*price)
        
    if sum(prices) < money:
        return 0
    else:
        return sum(prices) - money