/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let uniqueCandies=new Set(candyType).size;
    return Math.min(uniqueCandies,Math.floor(candyType.length/2))
};