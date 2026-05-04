/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let currLength = 0;
    for (let i = 0; i < sentences.length; i++) {
        let word = sentences[i].split(" ");
        let wordCount=word.length;
        currLength = wordCount > currLength ? wordCount : currLength;
    }
    return currLength;

};