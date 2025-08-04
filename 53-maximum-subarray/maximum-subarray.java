class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum=Integer.MIN_VALUE;
        int cSum=0;
        for(int val :nums){
            cSum+=val;
            maxSum=Math.max(cSum,maxSum);
            if(cSum<0){
                cSum=0;
            }

        }

        return maxSum;
    }
}