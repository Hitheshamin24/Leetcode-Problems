class Solution {
    public int searchInsert(int[] nums, int target) {
        int first=0,last=nums.length-1,mid=(int)(first+last)/2;
        while(first<=last){
             mid=(first+last)/2;
            if(nums[mid]==target){
                return mid;
            }
            if(nums[mid]<target){
                first=mid+1;
            }
            else{
                last=mid-1;
            }
        }
       return first;
    }
}