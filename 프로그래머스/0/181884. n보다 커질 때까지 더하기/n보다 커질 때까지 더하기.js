function solution(numbers, n) {
    let sum = 0;
    
    for ( let i = 0; i< numbers.length; i++ ) {
        if ( sum > n) return sum;
        console.log(sum);
        sum += numbers[i];
    }
    console.log(`${sum} 여기`);
    return sum;
}