function solution(age) {
    const cosmosAge = {
        0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j'
    };
    
    for (let [key, value] of Object.entries(cosmosAge)) {
        age = age.toString().replace(new RegExp(key, 'g'), value);
    }
    
    return age;
}