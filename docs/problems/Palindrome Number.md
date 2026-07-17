---
date: 2023-07-06
difficulty: Easy
num: 9
related_topics:
  - Math
return: Done
---

# Problem: 9. Palindrome Number

## Description
The problem involved was pretty simple. It was a boolean method that checked whether a number was a palindrome (same front and back). 121 is a palindrome. If it was, the method would return true.

## Approach / Thoughts

## Solution
```java
class Solution {
    public boolean isPalindrome(int x) {
        
        if (x < 0)
        {
            return false;
        }

        else
        {
            String s = String.valueOf(x);
            int i = 0;
            int j = s.length() - 1;

            for (int m = 0; m < s.length() / 2; m++)
            {

                if (s.substring(i,i+1).equals(s.substring(j,j+1)))
                {
                    i++;
                    j--;
                }

                else
                {
                    return false;
                }
            }
        }
        return true;
    }
}
```
