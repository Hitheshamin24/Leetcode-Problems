/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let temp={};
  for(let i=0;i<nums.length;i++){
    const need=target-nums[i];
    if(need in temp){
        return [temp[need],i]
    }
    temp[nums[i]]=i
  }

};