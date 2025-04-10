/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let answer = '';
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        answer += word1[i] || '';
        answer += word2[i] || '';
    }

    return answer;
};