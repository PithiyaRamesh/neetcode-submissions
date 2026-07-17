class Solution {

    getCharCountHash(s) {
        const sLengthMap = new Map()

        for(const c of s){
            let count = sLengthMap.get(c)
            if(count == undefined) {
                sLengthMap.set(c, 1)
            } else {
                sLengthMap.set(c,  ++count)
            }
        }
        return sLengthMap
    }
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
        
        const sLengthMap = this.getCharCountHash(s)
        const tLengthMap = this.getCharCountHash(t)

        for(const x of sLengthMap.entries()){
            const y = tLengthMap.get(x[0])
            if(x[1] != y){
                return false
            }
        }
        return true
    }

    
}
