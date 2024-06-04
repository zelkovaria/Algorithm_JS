function solution(s) {
    let splitedS = s.split(" ");
    let result = [];
    
    for ( let i = 0; i < splitedS.length; i++) {
        let transferedWord = [];
        
        for (let j = 0; j<splitedS[i].length; j++) {
            if (j === 0 ) transferedWord.push(splitedS[i][j].toUpperCase());
            else if ( j % 2 === 0) transferedWord.push(splitedS[i][j].toUpperCase());
            else transferedWord.push(splitedS[i][j].toLowerCase());
        }
        result.push(transferedWord.join(""));
    }
    
    console.log(result);
    console.log(result.join(""));
    return result.join(" ");
}