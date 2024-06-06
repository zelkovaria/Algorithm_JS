function solution(a, b) {
    const date = new Date(2016, a - 1, b);
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    const dayIndex = date.getDay();
    console.log(date);
    
    return days[dayIndex];
}


console.log(solution(5, 24)); 
