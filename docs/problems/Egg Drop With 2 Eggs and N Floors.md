---
date: 2025-12-07
difficulty: Medium
num: 1884
related_topics:
  - Dynamic Programming
  - Math
return: Done
---

# Problem: 1884. Egg Drop With 2 Eggs And N Floors

## Description

## Approach / Thoughts
dp check cases for break and survive eggs

## Solution
```python
class Solution:
    def twoEggDrop(self, n: int) -> int:

        @lru_cache(None)
        def dp(floors, eggs):
            if floors <= 1 or eggs == 1:
                return floors 

            res = floors
            for i in range(1, floors):
                breaks = dp(i-1, eggs-1)
                survive = dp(floors-i, eggs)
                res = min(res, 1 + max(breaks, survive))
            return res

        return dp(n, 2)      
```
