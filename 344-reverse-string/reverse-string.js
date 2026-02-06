/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let half = Math.floor(s.length / 2)
    let j = s.length - 1
    for (let i=0;i<half;i++ ){
        let temp=s[i]
        s[i]=s[j-i]
        s[j-i]=temp
    }
};