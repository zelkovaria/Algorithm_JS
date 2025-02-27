/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function(grid) {
    const totalSum = [];
    const widthSize = grid[0].length;

    for (let i = 0; i < grid.length; i++) {
        let sum;
        if (i+2 < grid.length) {
            for (let j = 0; j <widthSize; j++) {
            if (j + 2 < widthSize) {
                sum = grid[i][j] + grid[i][j+1] + grid[i][j+2] + grid[i+1][j+1] + grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2];

                totalSum.push(sum);
            }
        }
        }        
    }

    return Math.max(...totalSum);
};