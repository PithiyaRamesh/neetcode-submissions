class Solution {
    fun isPalindrome(s: String): Boolean {
        var revStr = "";
        for(char in s){
            if(char.isLetterOrDigit()){
                revStr += char.lowercaseChar()
            }
        }
        return revStr == revStr.reversed()
    }
}
