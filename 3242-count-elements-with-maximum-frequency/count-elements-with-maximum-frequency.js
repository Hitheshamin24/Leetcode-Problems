/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {

    let freq = {}
    let maxFreq=0
    let freqOfMaxFreq=0
    for(let num of nums){
        freq[num]=(freq[num]|0)+1
    }
    
    for(let f in freq){
        if(freq[f]>maxFreq){
            maxFreq=freq[f]
            freqOfMaxFreq=1
        }else if(freq[f]==maxFreq){
            freqOfMaxFreq+=1
        }
    }
    return freqOfMaxFreq * maxFreq;

};