/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let bottles = numBottles;
    let count = 0;

    while (bottles >= numExchange) {
        const newBottles = Math.floor(bottles / numExchange);
        count += newBottles;

        bottles = newBottles + (bottles % numExchange);
    }

    return Math.floor(numBottles + count);
    
};