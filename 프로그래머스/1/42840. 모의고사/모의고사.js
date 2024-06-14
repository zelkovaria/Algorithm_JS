function solution(answers) {
    let people1 = Array.from({length: Math.ceil(answers.length/5)}).flatMap(() => [1,2,3,4,5]).slice(0, answers.length);
    let people2 = Array.from({length: Math.ceil(answers.length/8)}).flatMap(() => [2,1,2,3,2,4,2,5]).slice(0, answers.length)
    let people3 = Array.from({length: Math.ceil(answers.length/10)}).flatMap(() => [3,3,1,1,2,2,4,4,5,5]).slice(0, answers.length)
    let score = [0, 0, 0];
    
    people1.map((num, index) => num === answers[index] ? score[0]++ : null, 0);
    people2.map((num, index) => num === answers[index] ? score[1]++ : null);
    people3.map((num, index) => num === answers[index] ? score[2]++ : null);
    
    const result = [];
    score.forEach((value, index) => {
        if (value === Math.max(...score)) {
            result.push(index+1);
            }
    });
    
    console.log(result);
    return result;
    
}