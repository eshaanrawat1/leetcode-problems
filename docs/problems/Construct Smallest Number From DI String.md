---
date: 2024-12-14
difficulty: Medium
num: 2375
related_topics:
  - Backtracking
  - Bitmask
  - DFS
  - Greedy
  - Recursion
  - Stack
  - String
return: Done
---

# Problem: 2375. Construct Smallest Number From Di String

## Description
same, inc and dec index

## Approach / Thoughts
dfs check all valid options, bitmask for visit

## Solution
```python
class Solution:
    def smallestNumber(self, pattern: str) -> str:
        
        @lru_cache(None)
        def dfs(idx, cur, used):
            if idx < 0:
                return cur

            res = 'X'
            for i in range(1, 10):
                if used & (1 << i):
                    continue

                nu = used | (1 << i)
                if idx == len(pattern):
                    res = min(res, dfs(idx-1, str(i)+cur, nu))

                elif pattern[idx] == 'I' and i < int(cur[0]):
                    res = min(res, dfs(idx-1, str(i)+cur, nu))

                elif pattern[idx] == 'D' and i > int(cur[0]):
                    res = min(res, dfs(idx-1, str(i)+cur, nu))

            return res

        return dfs(len(pattern), '', 1 << 11)
```
