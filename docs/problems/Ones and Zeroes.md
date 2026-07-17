---
date: 2024-08-29
difficulty: Medium
num: 474
related_topics:
  - Array
  - Dynamic Programming
  - String
return: Done
---

# Problem: 474. Ones And Zeroes

## Description
pick max subset

## Approach / Thoughts
take and skip 2d dp

## Solution
```python
class Solution:
    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:
        dp = {}
        def dfs(i, m_count, n_count):
            if m_count > m or n_count > n:
                return -1
            if i >= len(strs):
                return 0
            if (i, m_count, n_count) in dp:
                return dp[(i, m_count, n_count)]

            # take
            take = 1 + dfs(i + 1, m_count + strs[i].count('0'), 
            n_count + strs[i].count('1'))

            # skip
            skip = dfs(i + 1, m_count, n_count)

            res = max(take, skip)
            dp[(i, m_count, n_count)] = res
            
            return res
        return dfs(0, 0, 0)
```
