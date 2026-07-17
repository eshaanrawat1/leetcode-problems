---
date: 2024-09-19
difficulty: Hard
num: 214
related_topics:
  - Hash Function
  - Rolling Hash
  - String
  - String Matching
return: Done
---

# Problem: 214. Shortest Palindrome

## Description

## Approach / Thoughts
brute force

string slicing and starts with is O(1)

reverse matching for palindromes

## Solution
```python
class Solution:
    def shortestPalindrome(self, s: str) -> str:
        if not s:
            return ""
            
        rev = s[::-1]

        for i in range(len(s)):
            if s.startswith(rev[i:]):
                return rev[:i] + s
```
