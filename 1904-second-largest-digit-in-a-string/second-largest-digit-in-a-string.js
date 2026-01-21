/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let map={};
    for(let i=0;i<s.length;i++){
        const letter=s[i]
        if(letter>='0' && letter<='9'){
            map[letter]=1;
        }
        

    }
    const keys=Object.keys(map)
    if(keys.length>=2){
        return Number(keys[keys.length-2])
    }
    return -1
};