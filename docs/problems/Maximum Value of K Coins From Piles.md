---
date: 2024-10-24
difficulty: Hard
num: 2218
related_topics:
  - Array
  - Dynamic Programming
  - Prefix Sum
return: Review
---

# Problem: 2218. Maximum Value Of K Coins From Piles

## Description

## Approach / Thoughts
3d dp - 2d dp

choose from pile, as we accumulate, go to other piles

## Solution
```python
class Solution:
    def maxValueOfCoins(self, piles: List[List[int]], k: int) -> int:
        
        @lru_cache(None)
        def dfs(idx, coins):
            if coins == 0:
                return 0
            if idx >= len(piles):
                if coins == 0:
                    return 0
                else:
                    return float("-inf")

            res = dfs(idx + 1, coins)
            current_pile = 0

            for j in range(min(coins, len(piles[idx]))):
                current_pile += piles[idx][j]
                res = max(res, current_pile + dfs(idx + 1, coins - j - 1))
            return res
        return dfs(0, k)
```
