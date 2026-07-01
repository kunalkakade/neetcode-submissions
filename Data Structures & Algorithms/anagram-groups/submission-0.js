class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedStrs = strs.toSorted();
        const ans = []
        const temp = new Map();
        console.log(sortedStrs);
        const newSroted = sortedStrs.map((str)=>{
            let strr = str.split("").toSorted().join("");
            if(temp.has(strr)){
                temp.set(strr, [...temp.get(strr),str])
            }else{
                temp.set(strr, [str])
            }
        })
        return [...temp.values()];
    }
}
