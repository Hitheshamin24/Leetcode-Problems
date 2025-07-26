class Solution {
public:
    bool isPalindrome(int x) {
        int num=x;
        long long rev=0;
        while(x>0){
            int rem=x%10;
            rev=rev*10+rem;
            x/=10;
        }
        if(num==rev){
            return true;
        }else{
            return false;
        }
    }
};