/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let week = Math.floor((i - 1) / 7);
        let day = (i - 1) % 7;
        sum += week + day + 1;
    }

    return sum;
};