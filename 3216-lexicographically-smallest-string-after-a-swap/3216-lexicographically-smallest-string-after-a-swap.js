/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
    let best = s;
    const arr = s.split('');

    for(let i = 0; i < s.length -1; i++) {
        const leftNum = parseInt(s[i], 10);
        const rightNum = parseInt(s[i+1], 10);

        if ( leftNum % 2 === rightNum % 2) {
            let candidateArr = arr.slice();
            [candidateArr[i], candidateArr[i+1]] = [candidateArr[i+1], candidateArr[i]];
            const candidate = candidateArr.join('');

            if (candidate < best) best = candidate;
        }
    }

    return best;
};