class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k){
        const map = new Map()
        const freqArr = Array.from({ length: nums.length + 1 }, () => []);
        
        for(const n of nums){
            map.set(n, (map.get(n) ?? 0) + 1);
        }
        for(const [key, value] of map){
            freqArr[value].push(key)
        }
        const result = []
        for(let i = (freqArr.length - 1); i >= 0; i--){
            for(const n of freqArr[i]){
                result.push(n)
                if(result.length == k){
                    return result
                }
            }
        }
    }
    /* topKFrequent(nums, k) {
        const map = new Map();

        // Count frequency
        for (const n of nums) {
            map.set(n, (map.get(n) ?? 0) + 1);
        }

        // Sort by frequency (descending)
        const sorted = [...map.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(entry => entry[0]); // extract keys

        return sorted.slice(0, k);
    } */
}
