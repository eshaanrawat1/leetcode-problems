---
date: 2024-02-12
difficulty: Easy
num: 2108
related_topics:
  - Array
  - String
  - Two-Pointer
return: Done
---

# Problem: 2108. Find First Palindromic String In The Array

## Description
Same as problem title

## Approach / Thoughts
Iterate through words and check if its worst

## Solution
```python
class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        for w in words:
            if w == w[::-1]:
                return w
        return ""
```
