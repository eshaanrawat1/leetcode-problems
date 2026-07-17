---
date: 2024-09-02
difficulty: Medium
num: 926
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 926. Flip String To Monotone Increasing

## Description

## Approach / Thoughts
dp with choices

## Solution
```python
class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:
        # 1 0 0 1 1 0 

        s = s.lstrip('0').rstrip('1')

        @cache
        def dfs(i, prev):
            if i >= len(s):
                return 0

            res = 1e9 

            # make 0
            if not prev:
                if s[i] == '0':
                    res = min(res, dfs(i+1, prev))
                if s[i] == '1':
                    res = min(res, 1 + dfs(i+1, prev))

            # make 1
            if s[i] == '0':
                res = min(res, 1 + dfs(i+1, prev))
            if s[i] == '1':
                res = min(res, dfs(i+1, True))

            return res
        
        return dfs(0, False)       
```
