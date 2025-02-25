function solution(cards1, cards2, goal) {
    
    for (let i = 0; i < goal.length; i++) {
        let nowGoal = goal[i];
        
        if (cards1[0] === nowGoal) {
            cards1.shift();
        } else if(cards2[0] === nowGoal) {
            cards2.shift();
        } else {
            return "No";
        }
    }
    return "Yes";
}