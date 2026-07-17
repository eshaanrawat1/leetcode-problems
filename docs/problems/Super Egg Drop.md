---
date: 2025-12-07
difficulty: Hard
num: 887
related_topics:
  - Binary Search
  - Dynamic Programming
  - Math
return: Review
---

# Problem: 887. Super Egg Drop

## Description
same, more eggs

## Approach / Thoughts
inversion - for each combination of move eggs how many floors

if breaks, less floors to explore, if not can explore more floors

## Solution
```python
class Solution:
    def superEggDrop(self, k: int, n: int) -> int:
        
        @lru_cache(None)
        def dp(moves, eggs):
            if moves == 0 or eggs == 0:
                return 0 

            breaks = dp(moves-1, eggs-1)
            survive = dp(moves-1, eggs)
            return breaks + survive + 1
        
        l, r = 0, 1e3
        res = -1

        while l <= r:
            m = (l + r) // 2
            if dp(m, k) >= n:
                res = m
                r = m - 1
            else:
                l = m + 1
        return int(res)
```
