/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(var i = 0; i < nums.length-1; i++){
        for(var j = i+1; j > 0; j--){
            if(nums[j] == nums[j-1]){
                return true;
            }else if(nums[j] < nums[j-1]){
                var temp = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = temp;
            }else{
                break;
            }
        }
    }

    return false;
};