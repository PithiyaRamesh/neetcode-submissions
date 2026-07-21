class Solution {
    /*
    1. Count character repeatation in each and every word
    2. find the structully equal maps and group them
    */
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        const groups = new Map()
        for(const word of strs){
            let key = Array(26).fill(0)
            for(const c of word){
                const index = c.charCodeAt(0) - 97
                key[index]++
            }
            key = key.join(",")
            if(!groups.get(key)){
                groups.set(key, [])
            }
            groups.get(key).push(word)
        }
        return Array.from(groups.values())
    }

    // groupAnagrams(strs) {
    //     const anagramList = [];
    //     const wordCountMap = this.getMapWithCharCount(strs);
    //     for (let i = 0; i<strs.length; i++) {
    //         const countMap = wordCountMap.get(i);
    //         if (!countMap) continue;
    //         const subList = [];
    //         for (let entry of wordCountMap) {
    //             if (this.isEqualMap(countMap, entry[1])) {
    //                 subList.push(entry[1].get("word"));
    //                 wordCountMap.delete(entry[0]);
    //             }
    //         }
    //         anagramList.push(subList);
    //     }
    //     return anagramList;
    // }

    isEqualMap(map1, map2) {
        return (
            map1.size === map2.size &&
            map1.keys().every((k) => k === "word" || (map2.has(k) && map2.get(k) == map1.get(k)))
        );
    }
    getMapWithCharCount(strs) {
        const mapOfCountList = new Map();
        for (let i = 0; i < strs.length; i++) {
            mapOfCountList.set(i, this.getWordCharCountMap(strs[i]));
        }
        return mapOfCountList; 
    }

    getWordCharCountMap(word) {
        const map = new Map();
        for (let c of word) {
            map.set(c, map.get(c) + 1 || 1);
        }
        map.set("word", word)
        return map;
    }
}
