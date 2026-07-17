---
date: 2025-12-28
difficulty: Medium
num: 3789
related_topics:
  - Greedy
return: Done
---

# Problem: 3789. Minimum Cost To Acquire Required Items

## Description

## Approach / Thoughts
greedy on costboth

## Solution
```python
class Solution:
    def minimumCost(self, cost1: int, cost2: int, costBoth: int, need1: int, need2: int) -> int:
        # 23:16 
        # messed up the greedy cases kept tle, realized its simpler 
        
        res = 0
        while need1 > 0 and need2 > 0:
            if costBoth <= cost1 + cost2:
                amt = min(need1, need2)
                res += costBoth * amt
                need1 -= amt
                need2 -= amt
            else:
                amt1 = need1
                amt2 = need2
                res += (cost1 * amt1) + (cost2 * amt2)
                need1 -= amt1
                need2 -= amt2

        while need1 > 0:
            res += (cost1 * need1 if cost1 < costBoth else costBoth * need1)
            need1 = 0

        while need2 > 0:
            res += (cost2 * need2 if cost2 < costBoth else costBoth * need2)
            need2 = 0
        return res
```
