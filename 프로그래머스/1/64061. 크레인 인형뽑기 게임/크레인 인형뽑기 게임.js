function solution(board, moves) {
    const pickedDolls = [];
    const crainData = {};
    let answer = 0;
    
    // 열 별 스택 초기화
    for (let i = 0; i < board.length; i++) {
        crainData[i + 1] = [];
        for (let j = 0; j < board[0].length; j++) {
            if (board[j][i] !== 0) {
                crainData[i+1].push(board[j][i]);
            }
        }
    }
    
    for (let move of moves) {
        const doll = crainData[move].shift();
        if (!doll) continue;
        
    if (pickedDolls.length > 0 && pickedDolls[pickedDolls.length -1 ] === doll)           {
            pickedDolls.pop();
            answer += 2;
        } else {
             pickedDolls.push(doll);
        }
    }
    
    return answer;
}