---
date: 2026-04-30
difficulty: Easy
num: 1763
related_topics:
  - Hash Table
  - Sliding Window
  - Divide and Conquer
  - Bit Manipulation
  - String
return:
---

# Problem:  

## Description
A string `s` is **nice** if, for every letter of the alphabet that `s` contains, it appears **both** in uppercase and lowercase. For example, `"abABB"` is nice because `'A'` and `'a'` appear, and `'B'` and `'b'` appear. However, `"abA"` is not because `'b'` appears, but `'B'` does not.

Given a string `s`, return _the longest **substring** of `s` that is **nice**. If there are multiple, return the substring of the **earliest** occurrence. If there are none, return an empty string_.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Biweekly Contest 46]]


brute force every substring

## Solution
```python
class Solution:
    def longestNiceSubstring(self, s: str) -> str:
        n = len(s)
        
        def is_nice(x):
            xset = set(x)
            
            for l in xset:
                if l.lower() not in xset or l.upper() not in xset:
                    return False
            return True

        res = ""
        for i in range(n):
            for j in range(i, n):
                sub = s[i:j+1]
                if is_nice(sub) and len(sub) > len(res):
                    res = sub
        return res
        