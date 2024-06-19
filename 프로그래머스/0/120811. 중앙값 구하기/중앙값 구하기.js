function solution(array) {
    let sortedArray = array.sort((a,b) => a-b);
    return sortedArray[Math.floor(sortedArray.length/2)];
}