class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum=Integer.MIN_VALUE;
        int cSum=0;
        for(int start =0;start<nums.length;start++){
            cSum+=nums[start];
            maxSum=Math.max(cSum,maxSum);
            if(cSum<0){
                cSum=0;
            }

        }

        return maxSum;
    }
}