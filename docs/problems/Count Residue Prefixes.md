---
date: 2026-01-17
difficulty: Easy
num: 3803
related_topics:
  - Hash Table
  - String
return: Done
---

# Problem: 3803. Count Residue Prefixes

## Description

## Approach / Thoughts
set and track

## Solution
```python
class Solution:
    def residuePrefixes(self, s: str) -> int:
        # 3:10 - misread, thought it was n%3
        # not len prefix % 3
        
        cnt = set()
        res = 0

        for i, c in enumerate(s):
            cnt.add(c)
            res += (len(cnt) == (i+1)%3)
        return res
```
