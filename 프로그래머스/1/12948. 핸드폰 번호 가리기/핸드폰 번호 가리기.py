def solution(phone_number):
    last_num = phone_number[-4::]
    
    return '*' * (len(phone_number) - 4) + last_num