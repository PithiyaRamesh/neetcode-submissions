class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    /* hasDuplicate(nums) {
        for(let i = 0; i<nums.length; i++){
            for (let j = 0; j<nums.length; j++){
                if(i != j && nums[i] == nums[j]){
                    return true
                }
            }
        }
        return false
    } */

   hasDuplicate(nums) {
        const uniqueSet = new Set(nums)
        return nums.length > uniqueSet.size
    }

}
