class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const countMap = {};
        for (const num of nums) {
            if (countMap[num]) {
                return true;
            }
            countMap[num] = 1;
        }
        return false;
    }
}