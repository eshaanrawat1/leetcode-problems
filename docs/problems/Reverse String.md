---
date: 2023-07-20
difficulty: Easy
num: 344
related_topics:
  - String
  - Two-Pointer
return: Done
---

# Problem: 344. Reverse String

## Description
The problem was to reverse a string that was set in a char array index.

## Approach / Thoughts
My approach was to just use two pointers and swap the first and last chars. Very easy problem.

## Solution
```java
class Solution {
    public void reverseString(char[] s) {
        
        int a = 0;
        int b = s.length - 1;
        char z = 1;

        while (a < b) {
            z = s[a];
            s[a] = s[b];
            s[b] = z;
            a++;
            b--;
        }
    }
}
```
