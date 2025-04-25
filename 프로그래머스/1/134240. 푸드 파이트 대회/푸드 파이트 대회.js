function solution(food) {
    const foods = food.splice(1);
    let answer = '';
    
    let kal = 1;
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] / 2 > 0) {
            answer += kal.toString().repeat(foods[i]/2);
            kal++;
        }
        else kal++;
    }
    
    return answer + '0' + [...answer].sort((a, b) => b - a).join('');
}