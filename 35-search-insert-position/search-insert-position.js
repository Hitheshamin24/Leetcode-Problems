/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    right=nums.length;
    for(let i=0;i<right;i++){
        if(nums[i]==target){
            return i
        }else if (nums[i]<target){
            continue
        }else{
            return i
        }
    }
    return right
};