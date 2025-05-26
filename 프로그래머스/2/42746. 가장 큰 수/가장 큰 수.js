function solution(numbers) {
  const sorted = numbers.map(String).sort((a, b) => {
    return (b + a).localeCompare(a + b);
  });

  return sorted[0] === '0' ? '0' : sorted.join('');
}