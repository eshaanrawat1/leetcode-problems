---
date: 2024-04-14
difficulty: Medium
num: 647
related_topics:
  - Dynamic Programming
  - String
  - Two-Pointer
return: Done
---

# Problem: 647. Palindromic Substrings

## Description
Find all palindromic substrings

## Approach / Thoughts
Same as 5, start from middle of odd and even and expand

## Solution
```python
class Solution:
    def countSubstrings(self, s: str) -> int:
        count = 0
        N = len(s)

        for i in range(N):
            l, r = i, i
            while l >= 0 and r < N and s[l] == s[r]:
                count += 1
                l -= 1
                r += 1

            l, r = i, i+1
            while l >= 0 and r < N and s[l] == s[r]:
                count += 1
                l -= 1
                r += 1
        return count
            
```
