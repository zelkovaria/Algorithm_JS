/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const set = new Set(candyType);
    const maxCandyNum = candyType.length / 2;

    return maxCandyNum > set.size ? set.size : maxCandyNum;
};