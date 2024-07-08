function solution(sides) {
    let long = Math.max(...sides);
    sides.splice(sides.indexOf(long), 1);
    
    return long < sides[0] + sides[1] ? 1 : 2;
}