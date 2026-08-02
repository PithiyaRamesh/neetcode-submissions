class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encStr = ""
        for(let word of strs){
            encStr = encStr + `${word.length}#${word}`
        }
        return encStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    //str = "5#Hello5#World"
    decode(str) {
        if(!str || str == ""){
            return []
        }
        const decodedList = []
        //str.length => 14
        let wordLength = "";
        let endIndex = 0
        for(let i = 0; i<str.length; i++){
            //console.log("i =>",i)
            if(str[i] != "#"){
                wordLength += str[i]
                continue
            }
            // console.log("wordLength:", wordLength)
            endIndex = (Number(wordLength) + i)

            // console.log("endIndex:",endIndex)
            decodedList.push(str.substring(i+1, endIndex+1))
            wordLength = ""
            i = endIndex
        }
        return decodedList
    }
}
