---
date: 2023-07-30
difficulty: Easy
num: 125
related_topics:
  - String
  - Two-Pointer
return: Done
---

# Problem: 125. Valid Palindrome

## Description
To find whether a string is a palindrome. The catch is that we have to ignore all spaces and characters that are not letters or digits.

## Approach / Thoughts
My approach had a few steps.

1 - First, I found the edge case of when a string was empty. In that case, if the length of the string was zero, then we would return true.

2 - Next, we loop through the string and initialize an empty string. If the index of the original string was a letter or digit, then we add it to the other string. Otherwise, we ignore it.

3 - Next, we make the other string we have created, which was only letters and digits to be lowercase.

4 - After that, we can use a two pointer approach of a left and right pointers and test whether they are equal to each other. If they are not, then we automatically return false. If nothing else happens then we return true.

## Solution
```java
class Solution {
    public boolean isPalindrome(String s) {
        
        if (s.length() == 0) {
            return true;
        }

        String str = "";

        for (int i = 0; i < s.length(); i++) {
            if (Character.isLetterOrDigit(s.charAt(i))) {
                str += s.substring(i,i+1);
            }
        }

        String str2 = str.toLowerCase();
        int left = 0;
        int right = str2.length() - 1;
        while (left < right) { 
            if (str2.charAt(left) != str2.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
```
