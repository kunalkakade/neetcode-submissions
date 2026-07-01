class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const seen  = new Map();
       for(let i = 0; i < nums.length; i++){
            let need = target - nums[i]; 
            if(seen.has(need)){
                return [i, seen.get(need)];
            }else{
                seen.set(nums[i], i);
            }
       }
    }
}
