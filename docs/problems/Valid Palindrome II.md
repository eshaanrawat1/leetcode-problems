---
date: 2023-08-10
difficulty: Easy
num: 680
related_topics:
  - Greedy
  - String
  - Two-Pointer
return: Done
---

# Problem: 680. Valid Palindrome Ii

## Description
To check if the string was a valid palindrome if you can delete one char.

## Approach / Thoughts
My approach was to have a separate function run with two pointers to see if the string was a palindrome. In the original function, we only had to consider cases where the two pointer chars were not equal.

If that was the case, then we consider if the left pointer increments and if the right pointer decrements to see in those two cases if the word is still a palindrome.

## Solution
```java
class Solution {
    public boolean validPalindrome(String s) {
        int len = s.length();
        if (len == 0 || len == 1 || len == 2) {
            return true;
        }

        int left = 0;
        int right = len-1;

        while (left <= right) {
            if (s.charAt(left) == s.charAt(right)) {
                left++;
                right--;
            }
            else {
                return (isPal(s, left+1, right) || isPal(s, left, right-1));
            }
        }
        return true;
    }

    public boolean isPal(String str, int l, int r) {
        while (l <= r) {
            if (str.charAt(l) != str.charAt(r)) {
                return false;
            }
            else {
                l++;
                r--;
            }
        }
        return true;
    }
}
```
