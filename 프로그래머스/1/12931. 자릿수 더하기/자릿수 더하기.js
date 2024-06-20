function solution(n)
{
    let numbers = [...n.toString()];
    numbers = numbers.map(Number);

    return numbers.reduce((prev,current) => prev + current);
}