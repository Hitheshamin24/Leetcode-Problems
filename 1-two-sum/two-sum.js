/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let seen={};
  for(let i=0;i<nums.length;i++){
    const need=target-nums[i];
    if(need in seen){
        return [seen[need],i]
    }
    seen[nums[i]]=i
  }

};