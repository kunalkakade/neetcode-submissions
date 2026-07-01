class Solution {
    encode(strs) {
        return strs.map(s => `${s.length}#${s}`).join('');
    }

    decode(str) {
        const result = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') j++;
            const len = parseInt(str.slice(i, j), 10);
            const start = j + 1;
            result.push(str.slice(start, start + len));
            i = start + len;
        }
        return result;
    }
}