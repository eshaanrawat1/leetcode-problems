---
date: 2026-01-02
difficulty: Hard
num: 1392
related_topics:
  - Hash Function
  - Rolling Hash
  - String
  - String Matching
return: Done
---

# Problem: 1392. Longest Happy Prefix

## Description
same prefix and suffix

## Approach / Thoughts
check with built ins

## Solution
```python
class Solution:
    def longestPrefix(self, s: str) -> str:
        n = len(s)
        
        cur, res = "", ""
        for i in range(n):
            if s.startswith(cur) and s.endswith(cur):
                res = cur
            cur += s[i]
        return res
```
