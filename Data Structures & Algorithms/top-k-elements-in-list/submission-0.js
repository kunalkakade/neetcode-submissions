class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const leaderbaord = new Map();
        for(let i of nums){
            leaderbaord.set(i, (leaderbaord.get(i) || 0)+1);
        }

        const entries = [...leaderbaord.entries()].sort((a,b)=>b[1] - a[1])
        return entries.slice(0,k).map(e=> e[0])
    }
}
