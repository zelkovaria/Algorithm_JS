function solution(n, arr1, arr2) {
    let arr1Map = binaryNotation(n, arr1);
    let arr2Map = binaryNotation(n, arr2);
    
    return (compareMap(n, arr1Map, arr2Map));
}

function binaryNotation(n, arr) {
    let result = [];
    let binary = arr.map(i => i.toString(2));
    result = binary.map( value => value.length === n ? value : '0'.repeat(n-value.length)+value);
    
    return result;
}

function compareMap(n, arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        let value = [];
        for (let j = 0; j<n; j++) {
            if (arr1[i][j] == '1' || arr2[i][j] == '1') value.push("#");
            else value.push(" ");
        }
        answer.push(value.join(""));
    }
    return answer;
}