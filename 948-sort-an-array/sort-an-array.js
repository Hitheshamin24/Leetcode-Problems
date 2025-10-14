/**
 * @param {number[]} nums
 * @return {number[]}
 */var sortArray = function (nums) {
    const quickSort = (nums, start, end) => {
        if (start >= end) return;
        
        let pivotIndex = partition(nums, start, end);
        quickSort(nums, start, pivotIndex - 1);
        quickSort(nums, pivotIndex + 1, end);
    };
    
    const partition = (nums, start, end) => {
        // --- START OF FIX ---
        // 1. Pick a random index from the current sub-array.
        const randomIndex = start + Math.floor(Math.random() * (end - start + 1));
        
        // 2. Swap the random element with the last element.
        [nums[randomIndex], nums[end]] = [nums[end], nums[randomIndex]];
        // --- END OF FIX ---

        // Now, the rest of the function works perfectly with the new, random pivot.
        let pivot = nums[end];
        let i = start - 1;

        for (let j = start; j < end; j++) {
            if (pivot > nums[j]) {
                i++;
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
        i++;
        [nums[end], nums[i]] = [nums[i], nums[end]];
        return i;
    };

    quickSort(nums, 0, nums.length - 1);
    return nums;
};