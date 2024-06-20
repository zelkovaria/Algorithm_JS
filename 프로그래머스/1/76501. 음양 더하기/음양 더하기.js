function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, i) => {
        return acc + (signs[i] ? cur : -cur);
    }, 0);
}