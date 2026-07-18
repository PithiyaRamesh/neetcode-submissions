class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    /* twoSum(nums, target) {
        for(let i = 0; i < nums.length; i++){
            for(let j = (i+1); j < nums.length; j++){
                if(nums[i] + nums[j] === target){
                    return [i, j]
                }
            }
        }
    } */
   twoSum(nums, target){
    const map = new Map()
    for(let i = 0; i<nums.length; i++){
        const dif = target - nums[i];
        if(map.has(dif)){
            return [map.get(dif), i]
        }
        map.set(nums[i], i)
    }
   }
}
