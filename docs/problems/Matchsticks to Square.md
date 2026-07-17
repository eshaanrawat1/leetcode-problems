---
date: 2025-12-25
difficulty: Medium
num: 473
related_topics:
  - Array
  - Backtracking
  - Bit Manipulation
  - Bitmask
  - Dynamic Programming
return: Done
---

# Problem: 473. Matchsticks To Square

## Description

## Approach / Thoughts
partition k equal sum subsets, k=4 to make square

## Solution
```python
class Solution:
    def makesquare(self, A: List[int]) -> bool:
        n = len(A)

        total = sum(A)
        if total % 4 != 0:
            return False

        target = total // 4

        A.sort()
        if A[-1] > target:
            return False

        @lru_cache(None)
        def dfs(seen, cur_sum):
            if cur_sum == target:
                return dfs(seen, 0)
            
            if seen == (1 << n) - 1:
                return cur_sum == 0

            res = False
            for i, x in enumerate(A):
                if not (1 << i) & seen:
                    res = res or dfs(seen | (1 << i), cur_sum + x)
            return res

        return dfs(0, 0)  
```
