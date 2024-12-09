function isPrime(num) {
    if (num < 2) return false; // 2보다 작은 수는 소수가 아님
    for (let i = 2; i <= Math.sqrt(num); i++) { // 제곱근까지만 검사
        if (num % i === 0) return false; // 나누어 떨어지면 소수가 아님
    }
    return true; // 소수
}

function main() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 입력값 읽기

    const count = parseInt(input[0], 10); // 첫 줄: 숫자 개수
    const numbers = input[1].split(' ').map(Number); // 두 번째 줄: 숫자 배열

    if (numbers.length !== count) {
        console.error("입력 데이터 불일치");
        return;
    }

    let primeCount = 0; // 소수 개수 초기화

    for (const num of numbers) {
        if (isPrime(num)) {
            primeCount++;
        }
    }

    console.log(primeCount); // 소수 개수 출력
}

main();
