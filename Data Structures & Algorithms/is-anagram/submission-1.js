class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const l1 = s.length;
        const l2 = t.length;
        if(l1 !== l2){
            return false;
        }
        let ans = new Object();
        for(let char of s){
            if(ans[char]){
                ans[char]+=1
            }else{
                ans[char] = 1
            }
            
        }

        console.log(ans)

        for(let char2 of t){
            if(ans[char2]){
                ans[char2]-=1
            }
            
        }

console.log(ans)
        for(let key in ans){
            if(ans[key]){
                return false
            }
            
        }
console.log(ans)

        
        return true;
    }
}
