---
date: 2024-08-31
difficulty: Medium
num: 3271
related_topics:
  - Math
  - String
return: Done
---

# Problem: 3271. Hash Divided String

## Description

## Approach / Thoughts
follow brute force

## Solution
```python
class Solution:
    def stringHash(self, s: str, k: int) -> str:
        subs = []

        i = 0
        while i < len(s):
            subs.append(s[i:i+k])
            i += k
        
        res = []
        for sub in subs:
            val = sum(ord(ch) - ord('a') for ch in sub) % 26
            res.append(chr(val + 97))
        return ''.join(res)
```
