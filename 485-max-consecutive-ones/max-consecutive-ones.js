/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let temp=0
    let maxCount=0
    for(i=0;i<nums.length;i++){
        if(nums[i]!=0){
            temp++;
        }else{
            temp=0
        }
        maxCount=Math.max(temp,maxCount)
    }
    return maxCount;
};