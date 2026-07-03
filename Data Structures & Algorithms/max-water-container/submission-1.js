class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxx = 0;
        let i = 0;
        let j = heights.length -1;
        
        while( i <= j){
            let curr = (j-i) * Math.min(heights[i],heights[j]);
           
            if(curr > maxx) maxx = curr;
            if(heights[i] < heights[j]){
                i++;
            }else{
                j--;
            }
            // console.log(i, j, maxx);
        }
        return maxx;
    }
}
