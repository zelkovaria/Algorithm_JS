function solution(hp) {
    let strikingPower = [5, 3, 1];
    let result = [];
    for (let power of strikingPower) {
        while (hp >= power) {
            hp -= power;
            result.push(power);
        }
    }
    return result.length;
}