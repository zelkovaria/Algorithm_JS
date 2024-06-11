function solution(t, p) {
    let arrNumT = stringToNum(t, p);
    const numP = Number(p);
    let answer = [];
    console.log(arrNumT);
     answer = arrNumT.filter(num => num <= numP);
    return answer.length;
}

function stringToNum(t, p) {
    const lengthP = p.length;
    let arrNumT = [];
    
    for ( let i = 0; i<=t.length-lengthP; i++) {
        arrNumT.push(Number(t.substring(i,i+lengthP)));
    }
    
    return arrNumT;
}