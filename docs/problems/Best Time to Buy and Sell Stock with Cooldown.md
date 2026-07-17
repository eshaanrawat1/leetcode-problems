---
date: 2024-08-05
difficulty: Medium
num: 309
related_topics:
  - Array
  - Dynamic Programming
return: Review
---

# Problem: 309. Best Time To Buy And Sell Stock With Cooldown

## Description

## Approach / Thoughts
2d dp track states and decision tree

dfs and memo

## Solution
```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        dp = {}
        def dfs(i, buying):
            if i >= len(prices):
                return 0
            if (i, buying) in dp:
                return dp[(i, buying)]

            res = -1e9

            # option one - cooldown
            cooldown = dfs(i+1, buying)

            # option two - buy if not buying, sell if we are
            if buying:
                sell = prices[i] + dfs(i+2, False)
                res = max(res, sell)
            else:
                buy = -prices[i] + dfs(i+1, True)
                res = max(res, buy)
            dp[(i, buying)] = max(res, cooldown)
            return dp[(i, buying)]

        return dfs(0, False)
```
