class Solution {
    fun isPalindrome(s: String): Boolean {
        val strBuilder = StringBuilder()
        for(char in s){
            if(char.isLetterOrDigit()){
                strBuilder.append(char.lowercaseChar())
            }
        }
        val revStr = strBuilder.toString()
        return revStr == revStr.reversed()
    }
}
