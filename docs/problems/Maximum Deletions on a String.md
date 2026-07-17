---
date: 2026-02-20
difficulty: Hard
num: 2430
related_topics:
  - Dynamic Programming
  - Hash Function
  - Rolling Hash
  - Senior Staff
  - String
  - String Matching
return: Done
---

# Problem: 2430. Maximum Deletions On A String

## Description

## Approach / Thoughts
simulate dp top down

## Solution
```python
class Solution:
    def deleteString(self, s: str) -> int:
        n = len(s)

        @lru_cache(None)
        def dfs(i):
            res = 1

            cur_len = (n - i) // 2
            for j in range(1, cur_len+1):
                first = s[i:i+j]
                second = s[i+j:i+2*j]

                if first == second:
                    res = max(res, 1 + dfs(i+j))
            return res
        return dfs(0)
```
