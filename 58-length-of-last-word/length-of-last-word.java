class Solution {
    public int lengthOfLastWord(String s) {
        int len=0;
        int size=s.length();
        for(int i=size-1;i>=0;i--){
            if(s.charAt(i)!=' '){
                len++;
            }
            else if(len>0){
                break;
            }
        }
        return len;
    }
}