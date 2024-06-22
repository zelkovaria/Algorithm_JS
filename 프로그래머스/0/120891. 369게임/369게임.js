function solution(order) {
    return (order+'').split('').filter(num => Number(num) % 3 === 0 && Number(num) !== 0).length;
}